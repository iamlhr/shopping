window.onload = function(){

    var nav = document.getElementById("sec_nav");
    var navTop = nav.offsetTop;

    waterFull("goods_content","box",4);

    window.onscroll = function(){
        if(checkLoad()){
            var dataArr = [
                {"src":"img/more1.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more3.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more4.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more5.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more6.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more7.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more8.jpg","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more9.jpg","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more10.jpg","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more11.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200},
                {"src":"img/more12.png","title":"this is a warning","desc":"Here you need to get the data from the server","price":200}
            ];

            for(var i = 0 ; i < dataArr.length ; i ++){
                var newBox = document.createElement("div");
                newBox.className = "box";
                $("goods_content").appendChild(newBox);

                var newPic = document.createElement("div");
                newPic.className = "pic";
                newBox.appendChild(newPic);

                var newImg = document.createElement("img");
                newImg.src = dataArr[i].src;
                newPic.appendChild(newImg);

                var newTitle = document.createElement("p");
                newTitle.className = "title";
                newTitle.innerHTML = dataArr[i].title;
                newPic.appendChild(newTitle);

                var newDesc = document.createElement("p");
                newDesc.className = "desc";
                newDesc.innerHTML = dataArr[i].desc;
                newPic.appendChild(newDesc);

                var newPrice = document.createElement("p");
                newPrice.className = "price";
                newPrice.innerHTML = dataArr[i].price;
                newPic.appendChild(newPrice);
            }

            waterFull("goods_content","box",4);
        }



        var scroll_Top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

        if(scroll_Top >= navTop){
            nav.className = "nav-active sec-nav";
        }else{
            nav.className = "sec-nav";
        }
    }
}

/**
 * 瀑布流
 * @param parent
 * @param child
 * @param cols
 */
function waterFull(parent,child,cols){
    var allBox = $(parent).getElementsByClassName(child);
    var boxWidth = allBox[0].offsetWidth;

    var heightArr = [],boxHeight = 0,minBoxHeight = 0,minBoxIndex = 0;

    for(var i = 0 ; i < allBox.length ; i ++){
        boxHeight = allBox[i].offsetHeight;
        if(i < cols){ //第一行
            heightArr.push(boxHeight);
        }else{  //剩余行
            minBoxHeight = Math.min.apply(null,heightArr);
            minBoxIndex = getMinBoxIndex(heightArr,minBoxHeight);
            //子盒子定位
            allBox[i].style.position = "absolute";
            allBox[i].style.left = boxWidth * minBoxIndex + "px";
            allBox[i].style.top = minBoxHeight + "px";
            //更新高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }
}

function getMinBoxIndex(arr,val){
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === val){
            return i;
        }
    }
}

function $(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}

function checkLoad(){
    var allBox = document.getElementsByClassName("box");
    var lastBox = allBox[allBox.length - 1];

    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
    var scrHeight = document.body.clientHeight || document.documentElement.clientHeight;

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

    return lastBoxDis <= scrHeight + scrollTop;
}
