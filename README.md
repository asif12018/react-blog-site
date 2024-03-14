# React + Vite

To use local storage:
1.you have to set useEffect to load data from local storage and set dependencies to the variable that you have used to stored total data from api.
2.use condition when total data(variable that u used to stored data from api) length is greater then 0 then process will start.
3.create an empty array and start a loop. for total data that you have get from api.and use filter to or find to get the data that you have stored in local storage.becuz you have only saved id in local storage.so to get the exact data your filtering all data from that local store using id.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
