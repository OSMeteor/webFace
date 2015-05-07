var ezControllerClass = function($scope){
    //view model
    $scope.vm = {
        sb : {
            name : "Jason Stantham",
            gender : "male",
            age : 48,
            career : "actor",
            photo : "http://b.hiphotos.baidu.com/baike/w%3D268/sign=a03742145bee3d6d22c680cd7b176d41/359b033b5bb5c9eae4c45250d739b6003af3b34a.jpg"
        }
        //,shuffle : function(){
        //    var repo = [
        //        {name:"Jason Stantham",gender:"male",age:48,career:"actor",photo:"http://b.hiphotos.baidu.com/baike/w%3D268/sign=a03742145bee3d6d22c680cd7b176d41/359b033b5bb5c9eae4c45250d739b6003af3b34a.jpg"},
        //        {name:"Jessica Alba",gender:"female",age:32,career:"actress",photo:"http://h.hiphotos.baidu.com/baike/w%3D268/sign=ce8cdcb43bdbb6fd255be2203125aba6/b219ebc4b74543a91d7092831c178a82b9011411.jpg"},
        //        {name:"Nicolas Cage",gender:"male",age:53,career:"actor",photo:"http://f.hiphotos.baidu.com/baike/w%3D268/sign=e97412d2359b033b2c88fbdc2dcf3620/4a36acaf2edda3cc4187b7f600e93901203f9280.jpg"},
        //        {name:"崔永元",gender:"male",age:48,career:"independent journalist",photo:"http://e.hiphotos.baidu.com/baike/w%3D268/sign=856e3aab34d3d539c13d08c50286e927/8c1001e93901213ff48a548956e736d12f2e952d.jpg"},
        //        {name:"Sheetal Sheth",gender:"female",age:36,career:"actress",photo:"http://h.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f3627d0333fa828bc52e95b19c762a51/060828381f30e924f7c565374c086e061d95f757.jpg"},
        //        {name:"Barack Obama",gender:"male",age:58,career:"president",photo:"http://a.hiphotos.baidu.com/baike/w%3D268/sign=2a0045f7f1d3572c66e29bdab2126352/f7246b600c338744cb293d62520fd9f9d72aa03b.jpg"},
        //        {name:"Владимир Владимирович Путин",gender:"male",age:63,career:"president",photo:"http://h.hiphotos.baidu.com/baike/w%3D268/sign=657e210bb17eca8012053ee1a9239712/8435e5dde71190efa1a915f7cf1b9d16fdfa604c.jpg"}
        //    ];
        //    var idx = Math.floor(Math.random()*repo.length);
        //    $scope.vm.sb = repo[idx];
        //}
    };
    $scope.click={
        shuffle : function(){
            var repo = [
                {name:"Jason Stantham",gender:"male",age:48,career:"actor",photo:"http://b.hiphotos.baidu.com/baike/w%3D268/sign=a03742145bee3d6d22c680cd7b176d41/359b033b5bb5c9eae4c45250d739b6003af3b34a.jpg"},
                {name:"Jessica Alba",gender:"female",age:32,career:"actress",photo:"http://h.hiphotos.baidu.com/baike/w%3D268/sign=ce8cdcb43bdbb6fd255be2203125aba6/b219ebc4b74543a91d7092831c178a82b9011411.jpg"},
                {name:"Nicolas Cage",gender:"male",age:53,career:"actor",photo:"http://f.hiphotos.baidu.com/baike/w%3D268/sign=e97412d2359b033b2c88fbdc2dcf3620/4a36acaf2edda3cc4187b7f600e93901203f9280.jpg"},
                {name:"崔永元",gender:"male",age:48,career:"independent journalist",photo:"http://e.hiphotos.baidu.com/baike/w%3D268/sign=856e3aab34d3d539c13d08c50286e927/8c1001e93901213ff48a548956e736d12f2e952d.jpg"},
                {name:"Sheetal Sheth",gender:"female",age:36,career:"actress",photo:"http://h.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f3627d0333fa828bc52e95b19c762a51/060828381f30e924f7c565374c086e061d95f757.jpg"},
                {name:"Barack Obama",gender:"male",age:58,career:"president",photo:"http://a.hiphotos.baidu.com/baike/w%3D268/sign=2a0045f7f1d3572c66e29bdab2126352/f7246b600c338744cb293d62520fd9f9d72aa03b.jpg"},
                {name:"Владимир Владимирович Путин",gender:"male",age:63,career:"president",photo:"http://h.hiphotos.baidu.com/baike/w%3D268/sign=657e210bb17eca8012053ee1a9239712/8435e5dde71190efa1a915f7cf1b9d16fdfa604c.jpg"}
            ];
            var idx = Math.floor(Math.random()*repo.length);
            $scope.vm.sb = repo[idx];
        }
    }
};
angular.module("ezstuff",[])
    .controller("ezController",ezControllerClass);