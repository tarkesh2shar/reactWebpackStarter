(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(n,t,r){"use strict";function i(n){return"/"===n.charAt(0)}function o(n,t){for(var r=t,i=r+1,o=n.length;i<o;r+=1,i+=1)n[r]=n[i];n.pop()}t.a=function(n,t){void 0===t&&(t="");var r,e=n&&n.split("/")||[],f=t&&t.split("/")||[],s=n&&i(n),u=t&&i(t),a=s||u;if(n&&i(n)?f=e:e.length&&(f.pop(),f=f.concat(e)),!f.length)return"/";if(f.length){var p=f[f.length-1];r="."===p||".."===p||""===p}else r=!1;for(var c=0,h=f.length;h>=0;h--){var l=f[h];"."===l?o(f,h):".."===l?(o(f,h),c++):c&&(o(f,h),c--)}if(!a)for(;c--;c)f.unshift("..");!a||""===f[0]||f[0]&&i(f[0])||f.unshift("");var v=f.join("/");return r&&"/"!==v.substr(-1)&&(v+="/"),v}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9lc20vcmVzb2x2ZS1wYXRobmFtZS5qcyJdLCJuYW1lcyI6WyJpc0Fic29sdXRlIiwicGF0aG5hbWUiLCJjaGFyQXQiLCJzcGxpY2VPbmUiLCJsaXN0IiwiaW5kZXgiLCJpIiwiayIsIm4iLCJsZW5ndGgiLCJwb3AiLCJ0byIsImZyb20iLCJ1bmRlZmluZWQiLCJoYXNUcmFpbGluZ1NsYXNoIiwidG9QYXJ0cyIsInNwbGl0IiwiZnJvbVBhcnRzIiwiaXNUb0FicyIsImlzRnJvbUFicyIsIm11c3RFbmRBYnMiLCJjb25jYXQiLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInJlc3VsdCIsImpvaW4iLCJzdWJzdHIiXSwibWFwcGluZ3MiOiIyRkFBQSxTQUFTQSxFQUFXQyxHQUNsQixNQUE4QixNQUF2QkEsRUFBU0MsT0FBTyxHQUl6QixTQUFTQyxFQUFVQyxFQUFNQyxHQUN2QixJQUFLLElBQUlDLEVBQUlELEVBQU9FLEVBQUlELEVBQUksRUFBR0UsRUFBSUosRUFBS0ssT0FBUUYsRUFBSUMsRUFBR0YsR0FBSyxFQUFHQyxHQUFLLEVBQ2xFSCxFQUFLRSxHQUFLRixFQUFLRyxHQUdqQkgsRUFBS00sTUFnRVEsSUE1RGYsU0FBeUJDLEVBQUlDLFFBQ2RDLElBQVRELElBQW9CQSxFQUFPLElBRS9CLElBa0JJRSxFQWxCQUMsRUFBV0osR0FBTUEsRUFBR0ssTUFBTSxNQUFTLEdBQ25DQyxFQUFhTCxHQUFRQSxFQUFLSSxNQUFNLE1BQVMsR0FFekNFLEVBQVVQLEdBQU1YLEVBQVdXLEdBQzNCUSxFQUFZUCxHQUFRWixFQUFXWSxHQUMvQlEsRUFBYUYsR0FBV0MsRUFXNUIsR0FUSVIsR0FBTVgsRUFBV1csR0FFbkJNLEVBQVlGLEVBQ0hBLEVBQVFOLFNBRWpCUSxFQUFVUCxNQUNWTyxFQUFZQSxFQUFVSSxPQUFPTixLQUcxQkUsRUFBVVIsT0FBUSxNQUFPLElBRzlCLEdBQUlRLEVBQVVSLE9BQVEsQ0FDcEIsSUFBSWEsRUFBT0wsRUFBVUEsRUFBVVIsT0FBUyxHQUN4Q0ssRUFBNEIsTUFBVFEsR0FBeUIsT0FBVEEsR0FBMEIsS0FBVEEsT0FFcERSLEdBQW1CLEVBSXJCLElBREEsSUFBSVMsRUFBSyxFQUNBakIsRUFBSVcsRUFBVVIsT0FBUUgsR0FBSyxFQUFHQSxJQUFLLENBQzFDLElBQUlrQixFQUFPUCxFQUFVWCxHQUVSLE1BQVRrQixFQUNGckIsRUFBVWMsRUFBV1gsR0FDSCxPQUFUa0IsR0FDVHJCLEVBQVVjLEVBQVdYLEdBQ3JCaUIsS0FDU0EsSUFDVHBCLEVBQVVjLEVBQVdYLEdBQ3JCaUIsS0FJSixJQUFLSCxFQUFZLEtBQU9HLElBQU1BLEVBQUlOLEVBQVVRLFFBQVEsT0FHbERMLEdBQ2lCLEtBQWpCSCxFQUFVLElBQ1JBLEVBQVUsSUFBT2pCLEVBQVdpQixFQUFVLEtBRXhDQSxFQUFVUSxRQUFRLElBRXBCLElBQUlDLEVBQVNULEVBQVVVLEtBQUssS0FJNUIsT0FGSWIsR0FBMEMsTUFBdEJZLEVBQU9FLFFBQVEsS0FBWUYsR0FBVSxLQUV0REEiLCJmaWxlIjoibnBtLnJlc29sdmUtcGF0aG5hbWUuMjlhMDY2MmFkZWRmODk3YThlNmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvLCBmcm9tKSB7XG4gIGlmIChmcm9tID09PSB1bmRlZmluZWQpIGZyb20gPSAnJztcblxuICB2YXIgdG9QYXJ0cyA9ICh0byAmJiB0by5zcGxpdCgnLycpKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IChmcm9tICYmIGZyb20uc3BsaXQoJy8nKSkgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcblxuICBpZiAoXG4gICAgbXVzdEVuZEFicyAmJlxuICAgIGZyb21QYXJ0c1swXSAhPT0gJycgJiZcbiAgICAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKVxuICApXG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=npm.resolve-pathname.29a0662adedf897a8e6a.js.map