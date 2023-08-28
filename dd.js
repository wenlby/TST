// export default {
//   a:1,
//   b:2
// }

let arr = [1, 2, [3, [4, [5]]], [6, 7], [8, 9, [10, 7,11]], [12, [13, 14, 15, 16, [17], 9,18, 19], 20], 21];

let t = [];
function bian(arr) {
  arr.map((item)=>{
    if(typeof item ==='object'){
      bian(item)
    }else{
      t.push(item)
    }
  })
}

bian(arr)