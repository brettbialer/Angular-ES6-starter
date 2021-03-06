System.import('resources.json!').then(function(json) {
  window.resources = json;

  if (json.useMockedServices) {
    System.import('modules/mock.app.module').then(
      function(a) {
        angular.element(document).ready(
          function () {
            angular.bootstrap(document, ['app.mock']);
          }
        );
      },
      function(a, b, c) {
        console.out('\na:', a, '\nb:', b, '\nc:', c);
      }
    );
  } else {
    System.import('modules/app.module').then(
      function (a) {
        angular.element(document).ready(
          function () {
            angular.bootstrap(document, ['app']);
          }
        );
      },
      function (a, b, c) {
        console.out('\na:', a, '\nb:', b, '\nc:', c);
      }
    );
  }

});
