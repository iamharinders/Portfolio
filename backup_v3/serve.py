import os
import sys
import mimetypes
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class RobustRangeRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Range, Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Accept-Ranges', 'bytes')
        try:
            super().end_headers()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_HEAD(self):
        path = self.translate_path(self.path)
        if os.path.isfile(path):
            try:
                size = os.path.getsize(path)
                self.send_response(200)
                mime_type, _ = mimetypes.guess_type(path)
                self.send_header("Content-Type", mime_type or "application/octet-stream")
                self.send_header("Content-Length", str(size))
                self.end_headers()
            except (BrokenPipeError, ConnectionResetError):
                pass
            return
        try:
            super().do_HEAD()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isfile(path) and self.headers.get('Range'):
            try:
                size = os.path.getsize(path)
                range_header = self.headers.get('Range')
                start, end = 0, size - 1
                
                if range_header.startswith("bytes="):
                    parts = range_header[6:].split("-")
                    if parts[0]:
                        start = int(parts[0])
                    if len(parts) > 1 and parts[1]:
                        end = int(parts[1])
                
                if start >= size:
                    self.send_error(416, "Requested Range Not Satisfiable")
                    return
                
                end = min(end, size - 1)
                length = end - start + 1
                
                self.send_response(206)
                mime_type, _ = mimetypes.guess_type(path)
                self.send_header("Content-Type", mime_type or "application/octet-stream")
                self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                self.send_header("Content-Length", str(length))
                self.end_headers()
                
                with open(path, "rb") as f:
                    f.seek(start)
                    bytes_left = length
                    while bytes_left > 0:
                        chunk_size = min(bytes_left, 64 * 1024)
                        data = f.read(chunk_size)
                        if not data:
                            break
                        self.wfile.write(data)
                        bytes_left -= len(data)
                return
            except (BrokenPipeError, ConnectionResetError):
                # Client closed stream, harmless in HTTP video range streaming
                return
            except Exception as e:
                pass
        
        try:
            return super().do_GET()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]}\n")

def start_server(port):
    server_address = ('0.0.0.0', port)
    httpd = ThreadingHTTPServer(server_address, RobustRangeRequestHandler)
    httpd.allow_reuse_address = True
    print(f"🚀 Robust Server running on http://localhost:{port}/ and http://127.0.0.1:{port}/")
    try:
        httpd.serve_forever()
    except Exception as e:
        print(f"Server on port {port} stopped: {e}")

if __name__ == '__main__':
    ports = [3000, 8080]
    threads = []
    for port in ports:
        t = threading.Thread(target=start_server, args=(port,), daemon=True)
        t.start()
        threads.append(t)

    print("All Threading HTTP Servers running successfully.")
    for t in threads:
        t.join()
