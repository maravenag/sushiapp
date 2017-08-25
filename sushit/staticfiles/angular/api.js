app.factory('api', function ($http) {
    return {
        getSushiList: function () {
            return $http({
                method: 'GET',
                url: '/api/restaurant/getlist',
                //data: $.param({ data: JSON.stringify(data) })
            }).then(function (response) {
                return response.data;
            });
        }
    };
});