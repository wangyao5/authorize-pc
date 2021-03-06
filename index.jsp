<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en" ng-app="authorize">
  <head>

    <title>Le自助授权</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- 新 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">

    <!-- 可选的Bootstrap主题文件（一般不用引入） -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">

    <link rel="stylesheet" href="assets/css/style.css">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/constant.js"></script>
    <script type="text/javascript" src="app/controller.js"></script>
    <script type="text/javascript" src="app/router.js"></script>
    <script type="text/javascript" src="app/service.js"></script>
    <!-- <script type="text/javascript" src="mock/service.js"></script> -->
    <script type="text/javascript">
      <%
         out.print("var userName = '" + session.getAttribute("userNm") + "';");
         out.print("var role = '" + session.getAttribute("permis") + "';");
      %>
    </script>
  </head>

  <body>
    <div ui-view></div>
  </body>
</html>