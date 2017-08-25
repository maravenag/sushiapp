var app = angular.module('myApp', []);

app.controller('mainController', ['api', '$scope', function (api, $scope) {

    api.getSushiList().then(function (data) {
        $scope.vendor = data;
    });

}]);

app.component("list", {
    template: `
<div class="container">
    <div ng-repeat="v in $ctrl.vendor">
        <div class="row">
            <div class="col s5 m5">
                <div class="card small">
                    <div class="card-image">
                        <img src=[[v.image_url]]>
                        <span class="card-title">[[v.localname]]</span>
                    </div>
                    <div class="card-content">
                        <p>[[v.description]]</p>
                    </div>
                    <div class="card-action">
                        <a href="[[v.local_url]]">Ir al sitio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    bindings: {
        vendor: '<',
    },
    controller: function () {
        
    }
});