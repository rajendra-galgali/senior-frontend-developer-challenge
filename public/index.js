

angular.module('ObjectCompare', ['ngStorage', 'ngSanitize'])
    .controller('objectController', ['$scope', '$window', '$localStorage', 'ObjectHandle', '$sce', async function ($scope, $window, $localStorage, ObjectHandle, $sce) {
        $scope.baseObject = $window.localStorage.getItem('baseObject') || JSON.stringify({ "slug": "diya-foundation", "name": "Diya Foundation", "registration_number": "386/98-99", "auditor_name": "Das Kumar And Company", "created_at": "2013-02-08T09:28:51.000Z", "updated_at": "2020-02-25T06:11:35.814Z", "external_profiles": [{ "label": "Website", "uri": "http://www.diyafoundation-india.org/Site/index.html" }, { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" }], "tags": ["hoh18", "lfc19", "tbpp", "housie19", "gfc2020", "housie18"] })
        $scope.baseObjectCopy = JSON.parse($window.localStorage.getItem('baseObject')) || { "slug": "diya-foundation", "name": "Diya Foundation", "registration_number": "386/98-99", "auditor_name": "Das Kumar And Company", "created_at": "2013-02-08T09:28:51.000Z", "updated_at": "2020-02-25T06:11:35.814Z", "external_profiles": [{ "label": "Website", "uri": "http://www.diyafoundation-india.org/Site/index.html" }, { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" }], "tags": ["hoh18", "lfc19", "tbpp", "housie19", "gfc2020", "housie18"] }
        $scope.jsonPath = $window.localStorage.getItem('jsonPath') || JSON.stringify([{ "op": "replace", "path": "/tags/5", "value": "spbm18" }, { "op": "replace", "path": "/tags/4", "value": "bengaluru10k-18" }, { "op": "replace", "path": "/tags/3", "value": "lfc18-wow2" }, { "op": "replace", "path": "/tags/2", "value": "tcs10k-18" }, { "op": "replace", "path": "/tags/1", "value": "lfc18-cbp" }, { "op": "replace", "path": "/tags/0", "value": "lfc18" }, { "op": "add", "path": "/tags/6", "value": "housie18" }, { "op": "add", "path": "/tags/7", "value": "hoh18" }, { "op": "add", "path": "/tags/8", "value": "lfc19" }, { "op": "add", "path": "/tags/9", "value": "tbpp" }, { "op": "add", "path": "/tags/10", "value": "housie19" }, { "op": "add", "path": "/tags/11", "value": "gfc2020" }, { "op": "replace", "path": "/external_profiles/1/uri", "value": "https://www.facebook.com/pages/DIYA-Foundation/" }, { "op": "replace", "path": "/external_profiles/1/label", "value": "Facebook" }, { "op": "add", "path": "/external_profiles/2", "value": { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" } }, { "op": "add", "path": "/official_name", "value": "Diya Foundation" }]);
        $scope.jsonPathCopy = JSON.parse($window.localStorage.getItem('jsonPath')) || [{ "op": "replace", "path": "/tags/5", "value": "spbm18" }, { "op": "replace", "path": "/tags/4", "value": "bengaluru10k-18" }, { "op": "replace", "path": "/tags/3", "value": "lfc18-wow2" }, { "op": "replace", "path": "/tags/2", "value": "tcs10k-18" }, { "op": "replace", "path": "/tags/1", "value": "lfc18-cbp" }, { "op": "replace", "path": "/tags/0", "value": "lfc18" }, { "op": "add", "path": "/tags/6", "value": "housie18" }, { "op": "add", "path": "/tags/7", "value": "hoh18" }, { "op": "add", "path": "/tags/8", "value": "lfc19" }, { "op": "add", "path": "/tags/9", "value": "tbpp" }, { "op": "add", "path": "/tags/10", "value": "housie19" }, { "op": "add", "path": "/tags/11", "value": "gfc2020" }, { "op": "replace", "path": "/external_profiles/1/uri", "value": "https://www.facebook.com/pages/DIYA-Foundation/" }, { "op": "replace", "path": "/external_profiles/1/label", "value": "Facebook" }, { "op": "add", "path": "/external_profiles/2", "value": { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" } }, { "op": "add", "path": "/official_name", "value": "Diya Foundation" }];
        $scope.showDataDiff = false
        ObjectHandle.compateObject($scope.jsonPathCopy, $scope.baseObjectCopy).then(data => {
            $scope.showDataDiff = data;
        })
        $scope.onChangeValues = function () {
            $scope.errorMessage = '';
            if (isJSON($scope.jsonPath) && isJSON($scope.baseObject)) {
                $window.localStorage.setItem('baseObject', ($scope.baseObject))
                $window.localStorage.setItem('jsonPath', ($scope.jsonPath))
                $scope.baseObject = $window.localStorage.getItem('baseObject') || JSON.stringify({ "slug": "diya-foundation", "name": "Diya Foundation", "registration_number": "386/98-99", "auditor_name": "Das Kumar And Company", "created_at": "2013-02-08T09:28:51.000Z", "updated_at": "2020-02-25T06:11:35.814Z", "external_profiles": [{ "label": "Website", "uri": "http://www.diyafoundation-india.org/Site/index.html" }, { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" }], "tags": ["hoh18", "lfc19", "tbpp", "housie19", "gfc2020", "housie18"] })
                $scope.baseObjectCopy = JSON.parse($window.localStorage.getItem('baseObject')) || { "slug": "diya-foundation", "name": "Diya Foundation", "registration_number": "386/98-99", "auditor_name": "Das Kumar And Company", "created_at": "2013-02-08T09:28:51.000Z", "updated_at": "2020-02-25T06:11:35.814Z", "external_profiles": [{ "label": "Website", "uri": "http://www.diyafoundation-india.org/Site/index.html" }, { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" }], "tags": ["hoh18", "lfc19", "tbpp", "housie19", "gfc2020", "housie18"] }
                $scope.jsonPath = $window.localStorage.getItem('jsonPath') || JSON.stringify([{ "op": "replace", "path": "/tags/5", "value": "spbm18" }, { "op": "replace", "path": "/tags/4", "value": "bengaluru10k-18" }, { "op": "replace", "path": "/tags/3", "value": "lfc18-wow2" }, { "op": "replace", "path": "/tags/2", "value": "tcs10k-18" }, { "op": "replace", "path": "/tags/1", "value": "lfc18-cbp" }, { "op": "replace", "path": "/tags/0", "value": "lfc18" }, { "op": "add", "path": "/tags/6", "value": "housie18" }, { "op": "add", "path": "/tags/7", "value": "hoh18" }, { "op": "add", "path": "/tags/8", "value": "lfc19" }, { "op": "add", "path": "/tags/9", "value": "tbpp" }, { "op": "add", "path": "/tags/10", "value": "housie19" }, { "op": "add", "path": "/tags/11", "value": "gfc2020" }, { "op": "replace", "path": "/external_profiles/1/uri", "value": "https://www.facebook.com/pages/DIYA-Foundation/" }, { "op": "replace", "path": "/external_profiles/1/label", "value": "Facebook" }, { "op": "add", "path": "/external_profiles/2", "value": { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" } }, { "op": "add", "path": "/official_name", "value": "Diya Foundation" }]);
                $scope.jsonPathCopy = JSON.parse($window.localStorage.getItem('jsonPath')) || [{ "op": "replace", "path": "/tags/5", "value": "spbm18" }, { "op": "replace", "path": "/tags/4", "value": "bengaluru10k-18" }, { "op": "replace", "path": "/tags/3", "value": "lfc18-wow2" }, { "op": "replace", "path": "/tags/2", "value": "tcs10k-18" }, { "op": "replace", "path": "/tags/1", "value": "lfc18-cbp" }, { "op": "replace", "path": "/tags/0", "value": "lfc18" }, { "op": "add", "path": "/tags/6", "value": "housie18" }, { "op": "add", "path": "/tags/7", "value": "hoh18" }, { "op": "add", "path": "/tags/8", "value": "lfc19" }, { "op": "add", "path": "/tags/9", "value": "tbpp" }, { "op": "add", "path": "/tags/10", "value": "housie19" }, { "op": "add", "path": "/tags/11", "value": "gfc2020" }, { "op": "replace", "path": "/external_profiles/1/uri", "value": "https://www.facebook.com/pages/DIYA-Foundation/" }, { "op": "replace", "path": "/external_profiles/1/label", "value": "Facebook" }, { "op": "add", "path": "/external_profiles/2", "value": { "label": "Youtube", "uri": "http://www.youtube.com/watch?v=DezbmReWMf0" } }, { "op": "add", "path": "/official_name", "value": "Diya Foundation" }];
                $scope.showDataDiff = false
                ObjectHandle.compateObject($scope.jsonPathCopy, $scope.baseObjectCopy).then(data => {
                    $scope.showDataDiff = data;
                })
            } else {
                $scope.errorMessage = !isJSON($scope.jsonPath) ? 'Invalid JSON Path' : 'Invalid Object JSON';
            }
        }
        $scope.onClick = function (s) {
            console.log("cccccccc ", s)
        }
    }])
    .factory('ObjectHandle', function ($q, $http) {
        var service = {};
        service.compateObject = function (jsonPath, baseObject) {
            var defer = $q.defer();
            $http.post('http://localhost:1992/compareValues', {
                jsonPath,
                baseObject
            }).then(data => {
                defer.resolve(data.data);
            }, () => defer.resolve(baseObject));
            return defer.promise;
        };
        return service;
    });
