let arrImage = [
    {
      "id": 1,
      "name": "Animal Funny 1",
      "like": 100,
      "dislike": 5,
      "love": 50
    },
    {
      "id": 2,
      "name": "Animal Funny 2",
      "like": 200,
      "dislike": 15,
      "love": 129
    },
    {
      "id": 3,
      "name": "Animal Funny 3",
      "like": 100,
      "dislike": 42,
      "love": 10
    },
    {
      "id": 4,
      "name": "Animal Funny 4",
      "like": 100,
      "dislike": 22,
      "love": 44
    },
    {
      "id": 5,
      "name": "Animal Funny 4",
      "like": 154,
      "dislike": 22,
      "love": 144
    },
    {
      "id": 6,
      "name": "Animal Funny 6",
      "like": 88,
      "dislike": 45,
      "love": 56
    },
    {
      "id": 7,
      "name": "Animal Funny 7",
      "like": 100,
      "dislike": 43,
      "love": 44
    },
    {
      "id": 8,
      "name": "Animal Funny 8",
      "like": 333,
      "dislike": 45,
      "love": 280
    },
    {
      "id": 9,
      "name": "Animal Funny 9",
      "like": 145,
      "dislike": 33,
      "love": 120
    },
    {
      "id": 10,
      "name": "Animal Funny 10",
      "like": 66,
      "dislike": 44,
      "love": 44
    }
]
// arrImage.forEach(name => {
//     if(name='Animal Funny 10'){
//         console.log(arrImage.name)
//     }
// });
// var index=arrImage.length-1
// console.log(index)
//console.log(arrImage[arrImage.length].name)
console.log(arrImage[arrImage.length-1].name)
for(let i=0;i<arrImage.length;i++){
    if(arrImage[i].like!=100){
     console.log(arrImage[i]);
    }
}
let arr=[];
// arrImage.map((item)=>{
//     if(item.like!=100){
//         newarr.push(item);
//     }
// })
// newarr.map((item)=>{
//     console.log(item)
// })

    const newarr=arrImage.filter((item)=>item.like!=100);
   
console.log(arrImage.sort((a,b)=>b.dislike-a.dislike));
arrImage.map((item)=>{
    if(item.like>100 && item.love>100){
        arr.push(item);
    }
})
//console.log(arr.sort((a,b)=>b))
console.log(arr.sort((a,b)=>a.id-b.id));

arrImage.map((item)=>{
    item.type='non'
})
arrImage.map((item)=>{
    var para=item.like;
    switch (true) {
        case para>300 :
            item.type='A';
            break;
        case para>=200 && para<=300:
            item.type='B';
            break;
        case para>=100 && para<=200:
            item.type='C';
            break;
            case para<=100:
            item.type='D';
            break;
    }
})
console.log(arrImage)

var handlepara=(nonlike,nonlove,nondislike)=>{
  let a =0 ,b= 0,c=0;
   arrImage.map((item)=>{
      switch (true) {
          case item.like===nonlike:
              a++;
              break;
          case item.love===nonlove:
              b++;
              break;
              case item.dislike===nondislike:
                  c++;
                  break;
                  default:
                    break;
      }
   })
   console.log(`Ban co ${a} hinh anh co luoi like : ${nonlike}`);
   console.log(`Ban co ${b} hinh anh co luoi love : ${nonlove}`);
   console.log(`Ban co ${c} hinh anh co luoi dislike : ${nondislike}`);
}
handlepara(2,3,5);

const handleimage=(nonlike,nonlove,nondislike)=>{
  let listlike=arrImage.filter((item)=>item.like===nonlike);
  let listlove=arrImage.filter((item)=> item.love===nonlove);
  let listdislike=arrImage.filter((item)=>item.dislike===nondislike);
  console.log((`\n\tBan co ${listlike.length} hinh anh co luoi like : ${nonlike}
 \t Ban co ${listlove.length} hinh anh co luoi love : ${nonlove}
  \tBan co ${listdislike.length} hinh anh co luoi dislike : ${nondislike}`));
}
handleimage(12,3,43);