export default ({
  url= '',
  open = function(){/** */},
  message = function(a:any){/** */},
  error = function(){/** */},
  close = function(){/** */}
}) => {
  const ws = new WebSocket("ws://127.0.0.1:9999/socket"+url);
  ws.onopen = () => {
    open();
  };
  ws.onmessage = (evt) => {
    message(evt.data);
  };
  ws.onerror = () => {
    error();
  };
  ws.onclose = () => {
    close();
  };

  return ws;
};