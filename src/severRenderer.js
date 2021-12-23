export const severRenderer = (RootComponent, state) => `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <script>
    window.state = ${JSON.stringify(state)};
  </script>
  <title>Vanilla-SSR</title>
</head>
<body>
<div id="app">${RootComponent}</div>

<!-- csr을 위한 script tag -->
<script src="./src/main.js" type="module"></script>
<!-- / csr을 위한 script tag -->
</body>
</html>
`;
