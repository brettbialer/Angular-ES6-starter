System.import('resources.json!').then(function(json) {
  window.resources = json;

  if (json.useMockedServices) {
    System.import('mock.app.module').then(
      function(a) {
        console.log('bootstrapping "mock.app.module" with: ', a);
        angular.element(document).ready(
          function () {
            angular.bootstrap(document, ['mock.app']);
          }
        );
      },
      function(a, b, c) {
        console.log('\na:', a.message, a.stack, '\nb:', b, '\nc:', c);
      }
    );
  } else {
    System.import('app.module').then(
      function (a) {
        console.log('bootstrapping "app.module" with: ', a);
        angular.element(document).ready(
          function () {
            angular.bootstrap(document, ['app']);
          }
        );
      },
      function (a, b, c) {
        console.log('\na:', a.message, a.stack,  '\nb:', b, '\nc:', c);
      }
    );
  }

});
