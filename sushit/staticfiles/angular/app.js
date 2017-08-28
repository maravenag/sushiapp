var app = angular.module('myApp', []);

app.controller('mainController', function ($scope) {});

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
    bindings: "="
    ,
    controller: ['api', function (api) {
        var _this = this;
        
        api.getSushiList().then(function (data) {
            _this.vendor = data;
        });
    }]
});