import express from "express";
import {App} from "./src/component.js";
import {severRenderer} from "./src/severRenderer.js";
import {store} from "./src/store.js";

const app = express();

app.use(express.json());
app.use("/src", express.static("./src"));

//store의 값을 수정하는 api
app.put("/api/state", (req, res) => {
  store.hydration(req.body);
  res.status(204).send();
})

// path를 / -> /* == 모든 route와 매칭하기 위
app.get("/*", (req, res) => {
  res.send(
    severRenderer(App({
      path: req.path, //렌더링 시 path 정보 전

    }), store.state)
  );
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})


