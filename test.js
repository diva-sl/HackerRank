// // var x=6;

// // function staircase(n) {
// // for(var i=1;i<=n;i++){
// // let output='';
// //     for(var j=0;j<n-i;j++) output +=' ';
// //         for(var k=0;k<i;k++) output +='#'
// //         console.log(output);

// // }

// // }
// // console.log(staircase(x));



// var x=[5,5,5,5,5];

// function miniMaxSum(arr) {
//     let minSum=0;
//     let maxSum=0;
// let sortArr=arr.sort();
// // for(var i=1;i<sortArr.length;i++){
// sortArr.forEach(function(ele,idx){
// console.log(ele, idx)
// if(0<idx){
// minSum +=ele;
// }
// if(arr.length-1>idx){
//    maxSum +=ele;
// }
// })
// // }
// // for(var j=0;j<sortArr.length-1;j++){
// // maxSum +=sortArr[i]
// // }
// console.log(maxSum,minSum)

// }
//  console.log(miniMaxSum(x))


// var x=[3,1,4,5,5]

// function birthdayCakeCandles(ar) {
// var blownCandle=0;
// var tallestCandle=Math.max.apply(null,ar);
// ar.forEach(ele=>{
//     if(tallestCandle == ele){
//      blownCandle +=1;        
//     }

// })
// return blownCandle;

// }

// console.log(birthdayCakeCandles(x));

// var x="07:05:45AM"



// function timeConversion(s) {

// // const [time,modifier]=s.split(':');

// // console.log([time,modifier]);
//   let [hours, minutes,format] = s.split(':');
// console.log([hours,minutes,format])
// let [seconds,modifier]=format.match(/[a-z]+|[^a-z]+/gi)
//       if (hours === '12') {
//         hours = '00';
//       }

//       if (modifier === 'PM') {
//         hours = parseInt(hours, 10) + 12;
//       }

//       return `${hours}:${minutes}:${seconds}`;



// // }

// var x=[5,4,3,2,1];

// function countingSort(arr) {
// // const asc = (a, b) =>(a < b) ? -1 : (b < a) ? 1 : 0;

//  var adoutput = [];
//   var order;
//   var temp;
//   for (var i = 0; i < arr.length; i++) {
//     order = i;
//     for (var j = i + 1; j < arr.length; j++) {

// if(arr[order] < arr[j]){
//     order = order
// }
// else{
//     order=j;
// }

//       // var adorder = asc(arr[j], arr[order]);
//       // if (adorder == 1) {
//         // order = order;
//       // } else {
//         // order = j;
//       // }
//      }
//      temp = arr[i];
//      arr[i] = arr[order];
//     arr[order] = temp;
//     adoutput.push(arr[i]);
//   }

//   return adoutput;


// // return arr.reduce( (acc,v) => (acc[v] = (acc[v] || 0)+1, acc), [] )
// // .reduce((acc,n,i) => acc.concat(Array(n).fill(i)), [] );

// }




// console.log(countingSort(x))


// var roads=[[0,1,4],[1,3,7],[0,4,2],[1,2,3]];
// var machines=[4,3,2]

// function minTime(roads, machines) {
//   let time=0;
//      for(var i=0;i<roads.length;i++){
//             row=roads[i];
//         for(var j=1;j<row.length-1;j++){
//             for(var k=0;k<machines.length;k++){
//                 if(roads[i][j]==machines[k]){
//                     console.log(roads[i][j])
//                      time +=roads[i][2];
//                 }
//               }
//         }
//     }
//     return time;
// }




// console.log(minTime(roads,machines));
// var x=[73,67,38,33]


// function gradingStudents(grades) {
//   var output=[];

//   for(var i=0;i<grades.length;i++){
//     var round=Math.ceil(grades[i]/5)*5;
//         if((round-grades[i])<3 && (round >=40)){
//             output.push(round)
//         }
//     else{
//         output.push(grades[i])
//     }
// }
// return output;
// }

// console.log(gradingStudents(x))

// var s=7
// var t=11
// var a=5
// var b=15
// var apples=[-2,2,1]
// var oranges=[5,-6]

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//         let appleLand=0;
//         let orangeLand=0;
//         apples.forEach(function (ele,idx){
//             apples[idx]=ele+a;
//         })
//         apples.forEach(ele=>{
//             if(s<=ele && t>=ele){
//                 appleLand +=1;
//             }
//         });
//         oranges.forEach(function (ele,idx){
//             oranges[idx]=ele+b;
//         })
//         oranges.forEach(ele=>{
//             if(s<=ele && t>=ele){
//                 orangeLand +=1;
//             }
//         });

//        console.log(appleLand,orangeLand);

// }

// countApplesAndOranges(s, t, a, b, apples, oranges);

// var x1=0;
// var v1=3;
// var x2=4;
// var v2=2




// function kangaroo(x1, v1, x2, v2) {


// }

// var x=[[-9,-9,-9,1,1,1],
// [0,-9,0,4,3,2],
// [-9,-9,-9,1,2,3],
// [0,0,8,6,6,0],
// [0,0,0,-2,0,0],
// [0,0,1,2,4,0]]

// console.log(x.length)

// function hourglassSum(arr) {
//       let galssSum=[];
//   for(var i=0;i<arr.length-2;i++){
//        var row=arr[i];
//        for(var j=0;j<row.length-2;j++){
//         var glass=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
//         galssSum.push(glass);
//        }
//   }   
// return Math.max.apply(null,galssSum);
// }


// console.log(hourglassSum(x));


// var queries=[
// [1,345255357,205970905],
// [1,570256166,75865401],
// [1,94777800,645102173],
// [1,227496730,16649450],
// [1,82987157,486734305],
// [1,917920354,757848208],
// [1,61379773,817694251],
// [1,330547128,112869154],
// [1,328743001,855677723],
// [1,407951306,669798718],
// [1,21506172,676980108],
// [1,49911390,342109400],
// [1,980306253,305632965],
// [2,736380701,402184046],
// [2,798108301,416334323],
// [1,254839279,1370035],
// [1,109701362,2800586],
// [1,374257441,165208824],
// [1,624259835,477431250],
// [1,629066664,454406245],
// [1,135821145,763845832],
// [1,480298791,138234911],
// [1,553575409,835718837],
// [1,13022848,624652920],
// [1,974893519,882630870],
// [1,137832930,216177975],
// [1,453349691,969255659],
// [1,138396076,91038209],
// [1,699822497,941751038],
// [1,116800806,64071662],
// [1,815273934,8835809],
// [1,658534867,657771609],
// [1,183760807,179377441],
// [1,93984556,636425656],
// [1,231506463,836238924],
// [1,214074594,709571211],
// [1,649641434,509698468],
// [2,523656673,709717705],
// [2,261443586,330808140],
// [1,75924023,449768243],
// [1,849537714,354568873],
// [2,641743742,124196560],
// [1,19829224,995759639],
// [1,244389335,108315212],
// [1,877758467,421383626],
// [1,573278148,474192994],
// [2,561031511,448889978],
// [1,773294404,980994962],
// [2,33088709,716646168],
// [1,760927835,441983538],
// [1,273540687,783321829],
// [1,5933845,384358662],
// [1,543628702,372160176],
// [2,136400466,910559291],
// [2,546568738,393221347],
// [1,812227065,694221123],
// [1,311065574,103905420],
// [2,571344361,185289590],
// [1,99638520,173318136],
// [1,854060080,407068012],
// [2,980658213,778573744],
// [2,412539660,476853104],
// [1,530145366,36493537],
// [1,604875364,100141497],
// [2,650812104,64817757],
// [1,141060009,766603553],
// [1,598398952,418245941],
// [1,262344011,431865586],
// [2,56413893,546484833],
// [1,400736735,673588153],
// [1,642955232,803851098],
// [1,917782037,935143105],
// [1,658284524,745224102],
// [1,103202288,501551287],
// [1,162144918,12888783],
// [1,16486753,67467208],
// [1,671120703,941541277],
// [1,47399694,77707668],
// [1,122011395,946116527],
// [1,924363862,886726236],
// [2,657761235,540240467],
// [1,203175991,279882007],
// [2,304620923,162838413],
// [1,440453449,117964712],
// [2,941868853,887850334],
// [1,293198923,466812643],
// [1,461688477,532794906],
// [1,315016797,733095902],
// [1,265008751,913972757],
// [1,887405255,139170948],
// [2,754223230,426836947],
// [1,945967814,852589735],
// [1,168866283,309720694],
// [1,373861145,94596540],
// [2,984122495,20702849],
// [2,233835636,180460242],
// [1,172787631,643823473],
// [1,273611372,616819555],
// [1,196104599,690080895],
// [1,527554061,434103342]
// ]

// var queries=[[1,0,  5],
// [1,1,7],
// [1,0,3],
// [2,1,0],
// [2,1,1]]

// var n=100;

// function dynamicArray(n, queries) {
//    const seqList = [];
//     let lastAnswer = 0;
//     const answer = [];
//     queries.forEach(([t, x, y]) => {
//         const i = (x ^ lastAnswer) % n;
//         const seq = seqList[i] = seqList[i] || [];
//         if (t == 1) {
//             seq.push(y);
//         } else {
//             answer.push(lastAnswer = seq[y % seq.length]);
//         }
//     });
//         return answer;
// }


// console.log(dynamicArray(n,queries))


// var arr=[41,73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51];

// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let d=19;
// function main(arr,d){
//  arr.forEach((ele,idx)=>{
//     if(arr.length!=d){
//     const left=ele;
//     arr[idx]=arr[d];
//     arr[d]=left;
//     d++;
// // console.log(d)
// }
//  })
// return arr
// }

// console.log(arr.slice(d).concat(arr.slice(0,d)).join(' ')) 





// console.log(main(arr,d))


// const strings=['def','de','fgh']

// const queries=['de','lmn','fgh']

// function matchingStrings(strings, queries) {
//        let count=0;
//        var arr=[];
//        // for(var i=0;i<queries.length;i++){
//        //  for(var j=0;j<strings.length;j++){
//        //     if(strings[j]==queries[i]){
//        //      count +=1;
//        //     }
//        //  }
//        //  arr.push(count);
//        //  count=0;
//        // }

// queries.forEach(ele=>{
//        strings.forEach(ele1=>{

//            if(ele==ele1){
//             count+=1;
//            }
//        })
//        arr.push(count);
//        count=0
// })

// return arr

// }


// console.log(matchingStrings(strings,queries))



// var n=5;
// var queries=[[1,2,100],
// [2,5,100],
// [3,4,100]]

// // var queries=[[1,5,3],
// //     [4,8,7],
// //     [6,9,1]]




// function arrayManipulation(n, queries) {

// var arr=Array(n).fill(0);
// // queries.forEach(([a,b,k])=>{
//       // var x=b-a;
//       // console.log(b);
// for(var i=0;i<queries.length;i++){
//  var a=queries[i][0];
//  var b=queries[i][1];
//  console.log(b)
//  var k=queries[i][2];
//  for(var j=a-1;j<b;j++){
//     arr[j] +=k
//     console.log(arr);
//  }
// }


// return Math.max.apply(null,arr)


// }

// console.log(arrayManipulation(n,queries))


// class Node {
//     constructor(data,next=null){
//         this.data=data;
//         this.next=next;
//     }
// }

// // const n1=new node(100)

// // console.log(n1);
// class linkedList{
//     constructor (){
//         this.head=null;
//         this.size=0;
//     }
//     insertFirst(data){
//         this.head=new Node(data,this.head);
//         this.size++;
//     }
//     insertLast(data){
//         let node=new Node(data);
//         let current;

//         if(!this.head){
//             this.head=node;

//         }else{

//             current =this.head;

// console.log(current.next)
//             while(current.next){
//                 current=current.next;
//             }
//             current.next=node;
//         }
//         this.size++;
//     }
//     insertAt(data,index){
//       if(index > 0 && index > this.size){
//         return;
//     }
//     if(index === 0){
//         this.head=new Node(data,this.head);
//         return;
//     }
//     const node=new Node(data);
//     let current,previous;
//     current=this.head;
//     let count=0;
//     while(count <index){
//      previous=current;
//      count++;
//      current=current.next;

//  }
//  node.next=current;
//  previous.next=node;
//  this.size++;

// }
// getAt(index){
// let current=this.head;
// let count=0;
// while(current){
//     if(count==index){
//         console.log(current.data);
//     }
//     count++;
//     current=current.next;

// }
// return null;

// }
// printListData(){
//     let current=this.head;
//     while(current){
//         console.log(current.data);
//         current=current.next;
//     }
// }1


// }

// const ll=new linkedList();
// ll.insertLast(100);
// ll.insertLast(200);
// ll.insertLast(300);
// ll.insertLast(400);
// // ll.insertAt(500,10);
// // ll.getAt(1);
// ll.printListData();
// // console.log(ll)



// const SinglyLinkedList = class {
//     constructor() {
//         this.head = null;
//     }

// };


// const SinglyLinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// }



// function insertLast(data){
// var node1=new SinglyLinkedList();
// var node=new SinglyLinkedListNode(data,node1.head);

// let current;

// if(!node1.head){
//     node1.head=node;
//     // node.next=next;
// console.log(node1)

// }
// else{


// }
// // console.log(node)

// }

// console.log(insertLast(200))
// console.log(insertLast(100))


// function gcd(k, n) {
//     return k ? gcd(n % k, k) : n;
// }

// console.log(gcd(16,8));


// let a=[3,9,6]
// let b=[100]

// const gcd = (a, b) => a ? gcd(b % a, a) : b;

// const lcm = (a, b) => a * b / gcd(a, b);

// function getTotalX(a, b) {
//     var total = [];
// var l1=a.reduce(lcm);
// var g1=b.reduce(gcd);
//    for(var i=l1;i<=g1;i++){
//     b.reduce(ele=>(ele%i==0)total.push(i))
// }

//     return total.length;
// }

// console.log(getTotalX(a,b))



// var scores=[3,4,21,36,10,28,3,5,24,42]


// function breakingRecords(scores) {
// var best=scores[0];
// var worst=scores[0];
// let scoreBoard=[0,0];

// // let worstScore=0;
// scores.forEach(ele=>{
//       if(best<=ele && best !=ele ){
//         scoreBoard[0] +=1;
//         best=ele;
//       }else if(worst>=ele && worst !=ele){
//         scoreBoard[1] +=1
//         worst=ele
//       }

// })

// // for(var i=1;i<scores.length;i++){
// //       if(highest<=scores[i] && highest != scores[i]){
// //          bestScores +=1;
// //          highest=scores[i];       
// //       }
// //       else if(lowest >= scores[i] && lowest!=scores[i]){
// //         worstScores +=1;
// //         lowest=scores[i];
// //       }
// // }
// return scoreBoard;
// }

// console.log(breakingRecords(scores));


// let s=[4,5,4,2,4,5,2,3,2,1,1,5,4];
// let d= 15;
// let m= 4;


// function birthday(s, d, m) {
//     let first=0;
//     let total=0;
//     let arr=[];
//     let month=m;

//   for(var i=0;i<=s.length-m;i++){
//       for(var j=i;j<month;j++){
//          first +=s[j]        
//       }
//       arr.push(first);
//       month++;
//       first=0;
// }
// arr.forEach(ele=>{
//     if(ele==d){
//         total +=1;
//     }
// })
// return total;
// }


// console.log(birthday(s,d,m));


// let n=6;
// let k=3;
// let ar=[1,3,2,6,1,2];




// function divisibleSumPairs(n, k, ar) {
//     let sumCount=0;
//     ar.forEach((ele,idx)=> {
//         for(var i=idx+1;i<n;i++){
//             if((ar[i]+ele)%k == 0){
//                 sumCount +=1;
//             }
//         }
//     })
//     return sumCount;
// }
// console.log(divisibleSumPairs(n,k,ar));


// let arr=[1,2,3,4,5,4,3,2,1,3,4]



// function migratoryBirds(arr) {
// 	let types=[];
//     let type;
//     for (var i=0;i<5;i++){
//     	types[i]=0;
// arr.forEach(ele =>(ele==i+1) ? types[i] +=1 : 0 )
// }
//  types.find((ele1,idx)=> (ele1==Math.max.apply(null,types)) ? type=idx+1 : 0 )
//   return type;
// }



// console.log(migratoryBirds(arr));


// let year=1916;

// function dayOfProgrammer(year) {
//       let sevenMonths=215;
//       let feb;
//       if(year < 1918){
//       	feb = (year%4) ? 28 : 29;
//          console.log(feb+sevenMonths);

//       }
//       else if(year > 1918){
//          feb = !(year%400) || (year%100) && !(year%4) ? 29 : 28;
//       }
//       else{
//           feb=15;
//       }
//       feb = 256-(feb + sevenMonths);

//       return feb+ ".09." +year;  
// }



// console.log(dayOfProgrammer(year))




// // ((year <= 1917) & (year%4 == 0)) or ((year > 1918) & (year%400 == 0 or ((year%4 == 0) & (year%100 != 0)))):


// let bill=[3,10,2,9]
// let k=1;
// let b=12;


// function bonAppetit(bill, k, b) {
// let actual=0;
// bill.forEach((ele,idx)=>(idx!=k) ? actual +=ele : 0);
// console.log(((actual/2) == b) ? actual : b-actual/2);
// }

// console.log(bonAppetit(bill, k, b))

// let n=9
// let ar=[10,20,20,10,10,30,50,10,20]

// function sockMerchant(n, ar) {
// 	let pair=0;
// 	let pairArr=[];
// 	let check;
// 	for (var i=0;i<ar.length;i++){
//         if(check == ar[i]){
//            pair +=1;
//         }
//      pairArr.push(pair);
// }
// console.log(pairArr)
// }

// console.log(sockMerchant(n,ar));

// let x1= 21;
// let x2= 47;
// let v1= 6;
// let v2= 3;

// function kangaroo(x1, v1, x2, v2) {
// 	let kangaroo1= x1;;
// 	let kangaroo2 = x2;
// 	if(x2 > x1 && v2< v1){
// 		for(var i=0;i<10;i++){
// 			kangaroo1 += v1;
// 			kangaroo2 += v2;
// 			if(kangaroo1 == kangaroo2){
// 				return "YES";
// 			}
// 		}
// 		return "NO"
// 	}else{
// 		return "NO"
// 	}

// }

// console.log(kangaroo(x1,v1,x2,v2));



// let a=[3,4];
// let b=[24,48];


// function getTotalX(a, b) {
//    var total = [];
// let l1=Math.max.apply(null,a)
// let g1=Math.min.apply(null,b);
// let mul;
// for(var i=1;i<=100;i++){
//     mul = l1*i;
//     let check=b.every(ele=> (ele%mul == 0));
//       if(check && mul <=g1){
//         total.push(i);
//       }
// }

//     return total.length;

// }



// console.log(getTotalX(a,b))


// let a=[1];
// let b=[72,48]

// function getTotalX(a, b) {
//        var total = [];
//     const gcd = (a, b) => a ? gcd(b % a, a) : b;
//     const lcm = (a, b) => a * b / gcd(a, b);
//     let l1=a.reduce(lcm);
//     let g1=b.reduce(gcd);
//     console.log(g1)
//     let mul;
//     for(var i=1;i<=g1;i++){
//         mul = l1*i;
//         let check=b.every(ele=> (ele%mul == 0));
//       if(check && mul <=g1){
//         total.push(i);
//       }          
//     }
//     return total.length;
// }

// console.log(getTotalX(a,b))


// let n=15
// let ar=[6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]


// function sockMerchant(n, ar) {
// 	let pairs=0;
// 	let check=[];
// 	let count=0;
// 	for(var i=0;i<n;i++){
// 		if(!(check.includes(ar[i]))){
// 			check.push(ar[i]);
// 		}
// 	}
// 	check.forEach(ele=>{
// 		ar.forEach(ele1=>{
// 			if(ele == ele1){
// 				count +=1;
// 				if(count==2){
// 					pairs +=1;
// 					count=0;
// 				}
// 			}
// 		})
// 		count=0;
// 	})
// return pairs;
// }

// console.log(sockMerchant(n,ar))

// let n=37455;
// let p=29835;

// let n=15603;
// let p=6957;
// // let n=70809;
// // let p=46090;

// // let n=6
// // let p=2
// function pageCount(n, p) {
// 	let frontCount=0;
// 	let backCount=0;
// 	// let check=1;
// 	for (var i=1;i<n;i++){
// 		if((p%2==0) && i<p && p!=1){
// 			frontCount +=1;

// 		}else if((p%2!=0) && i<p && p!=1){
// 			frontCount +=1;

// 		}
// 		if(n%2==0){
// 			if((p%2==0) && n-i>p){
// 				backCount +=1;
// 			}
// 			else if((p%2!=0) && n-i>=p){
// 				backCount +=1;
// 			}
// 		} else if(n%2!=0){
// 			if((p%2==0) && n-(i+1)>p){
// 				backCount +=1;
// 			}
// 			if((p%2!=0) && n-(i+1)>=p){
// 				backCount +=1;
// 			}
// 		}

// 	}
// 	console.log(frontCount,backCount)
// 	if(frontCount<backCount){
// 		return Math.round(frontCount/2);
// 	}else if(frontCount==backCount && frontCount!=0){
// 		return 1;
// 	}

// 	else{
// 		return Math.round(backCount/2);
// 	}
// }



// console.log(pageCount(n,p));


// let n=10;
// let s="UDDDUDUDUU"



// function countingValleys(n, s) {
// 	let valleys=0;
// 	let seaLevel=0;
// 	for(var i=0;i<n;i++){
// 		if(s.charAt(i)=="U"){
// 			seaLevel +=1;
// 		}if(s.charAt(i)=="D"){
// 			seaLevel -=1;
// 		}
// 		console.log(seaLevel,s.charAt(i))
// 		if(seaLevel==0 && s.charAt(i)=="U"){
// 			valleys +=1;
// 		}

// 	}
// return valleys;
// }

// console.log(countingValleys(n,s))

// let keyboards=[4,3]
// let drives=[5,2]
// let b=9;


// function getMoneySpent(keyboards, drives, b) {
//      let purchase=[];
//      keyboards.forEach(ele=>{
//          drives.forEach(ele1=>{
//              if(ele+ele1 < b){
//              purchase.push(ele+ele1);
//              } 
//          })
//      })

// if(purchase.length>0){
//       return Math.max.apply(null,purchase);
//   }
//   else {
//   	return -1;
//   }
// }


// console.log(getMoneySpent(keyboards,drives,b));



// function catAndMouse(x, y, z) {
	// let length=Math.max(x,y,z);
 //    for (var i=1;i<=length;i++){
 //    	if(x+i==z && y-i==z || x-i==z && y+i==z || x==z && y==z){
 //    		return "Mouse C";
 //    	}
 //    	if(x+i==z || x-i==z || x==z){
 //    		return "Cat A"
 //    	}
 //    	if (y+i==z || y-i==z || y==z){
 //    		return "Cat B"
 //    	}
 //    }
// let a = (x==Math.max(x,z)) ? x-z : z-x;
// let b = (y==Math.max(y,z)) ? y-z : z-y;

// if(a<b){
// 	return "Cat A";
// }
// if(b<a){
// 	return "Cat B";
// }
// if(a==b){
// 	return"Mouse C";
// }

// }


// console.log(catAndMouse(x,y,z));

// let s= [[4,5,8],
//     [2,4,1],
//     [1,9,7]]
//  let all= [
//             [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
//             [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
//             [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
//             [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
//             [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
//             [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
//             [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
//             [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
//             ]
// let s=[[4,8,2],
// [4,5,7],
// [6,1,6]]

// // let s=[[5,3,4],
// // [1,5,8],
// // [6,4,2]]
// function formingMagicSquare(all,s) {
//       let cost=0;
//       let totals=[];
//     	let total=0;

//     for(var i=0;i<all.length;i++){
//         let row=all[i];

//        for (var j=0;j<row.length;j++){
//        	let a_row=row[j];
//        	for(var k=0;k<s.length;k++){
//        		let s_row=s[k];
//        			for(var l=0;l<a_row.length;l++){
//   						for(var m=0;m<s_row.length;m++){
//                                if(l!=m){
//                                	total +=Math.max(a_row[l],s_row[m])-Math.min(a_row[l],s_row[m]);
//                                }


//   						}

//        			}
//        			console.log(total)

//                   total=0;

//        	}


//        }


//       }



// // all.forEach(([a,b,c])=>{
// //      let split=[a,b,c];

// //     // console.log('sjjsjks',a,b,c);

// // 	s.forEach(([a1,b1,c1])=>{
// // 		// console.log(a,b,c,'dxdhxj',[a1,b1,c1]);
// // 		cost +=((a1+b1+c1)>15) ? (a1+b1+c1)-15 : 15-(a1+b1+c1);  

// // 	})
// // })      

// // 	if(s[1][1]!=5){
// // 	return cost+2;
// // }else{
// // 	return cost;
// // }

// }


// console.log(formingMagicSquare(all,s));



// let scores=[100,100,50,40,20,10];
// let alice=[5,25,50,120];


// function climbingLeaderboard(scores, alice) {
//      let aliceRank=[];
//      let rank;
//      let rankBoard=[...new Set(scores)];
//      let check;

//      let small=rankBoard.indexOf(Math.min.apply(null,rankBoard));
//     alice.forEach(ele =>{
//          rankBoard.find((ele1,idx)=>{

//          	if(ele == ele1 && ele != rankBoard[idx+1]){
//          		console.log(rankBoard[idx+1])
//          	   rank=idx+1;
//               check=ele;
//               	}
//          	else if(ele < ele1 && rankBoard[idx+1]!=undefined && ele!=check){
//               rank=idx+1;
//          	}
//          	else if(ele < ele1 && rankBoard[idx+1]==undefined && ele!=check){
//               rank=idx+2;         			
//          	}
//          	else if(ele>ele1 && rankBoard[idx+1]!=undefined && ele!=check){
//                rank=idx+1;
//          	}

//          })
//          console.log(rank);
// aliceRank.push(rank);
//     })
//     	console.log(aliceRank);        




// }




// console.log(climbingLeaderboard(scores,alice));

// let s="aaabbbb";

// function gameOfThrones(s) {
//  let oddCount = 0;

//     for(let i = s.length-1; i >= 0; i--){
//         if(s.lastIndexOf(s.charAt(i)) === i){
//             let j = s.indexOf(s.charAt(i));
//             let k = 1;

//             while(j !== i){
//                 j = s.indexOf(s.charAt(i), j+1)
//                 k++;
//             }
//            console.log(k)
//             if(k%2 !== 0) {
//                 oddCount++;

//                 if(oddCount === 2) { return `NO`; }
//             }
//         }
//     }
//     return `YES`;

// }
// console.log(gameOfThrones(s));



// let s1='hello';
// let s2='world';

// function twoStrings(s1, s2) {
// 	for(var i=0;i<s1.length;i++){
// 		let match=s2.includes(s1.charAt(i));
// 		if(match){
// 			return `YES`;
// 			break;
// 		}
// 	}
// 	if(match==false){
// 		return `NO`;
// 	}
// }




// console.log(twoStrings(s1,s2));



// String Construction 

// let s='abbckskdk';



// function stringConstruction(s) {
// 	let p='';
// 	let cost=0;
// 	for(var i=0;i<s.length;i++){
// 		if(!(p.includes(s.charAt(i)))){
// 			p=p.concat(s.charAt(i));
// 			cost +=1;
// 		}

// 	}
// 	return cost;
// }

// console.log(stringConstruction(s));

//sherlock and the Valid

// let s='aaaabbcc'

// function isValid(s) {
// let valid={};
// let max_count=0;
// let min_count=0;
// for(var i=0;i<s.length;i++){
// 	if(valid[s.charAt(i)]==undefined){
// 		valid[s.charAt(i)] =1;
// 	}else{
//      valid[s.charAt(i)] +=1;
// 	}


// }
// var arr = Object.keys( valid ).map(function ( key ) { return valid[key]; });
// console.log(arr)
// let min =Math.min.apply(null,arr);
// let max=Math.max.apply(null,arr);
// arr.forEach(ele=>{
// 	if(ele==max){
// 		max_count +=1;
// 	}
// 	if(ele==min){
// 		min_count +=1
// 	}

// })
// if(max==min){
// 	return `YES`;
// }
// if(min_count+max_count!=arr.length){
// 	return `NO`;
// }
// if(min==1 && min_count==1){
// 	return `YES`;
// }
// if(max_count==1 && max==min+1){
// 	return 'YES';
// }else{
// 	return `NO`;

// }

// }

// console.log(isValid(s));


// Highest Value Palindrome



// function largestPalindrome(){
// let n=9011;
//     var arr = [];    
//     for(var i =n; i<9999; i++){
//         // for(var j = 99; j>10; j--){
//             var mul = n++;
//             console.log(mul)
//             	if(isPalin(mul)){
//                 	arr.push(mul);
//             	}
//           	}
//     // }
// console.log(arr)
//     return Math.max.apply(Math, arr);
// }

// function isPalin(i){
//     return i.toString() == i.toString().split("").reverse().join("");
// }

// console.log(largestPalindrome());



// let s='SOSOOSOSOSOSOSSOSOSOSOSOSOS';

// function marsExploration(s) {
//    		let radiation=0;
//    		let n=0;
// 	for(var i=n;i<s.length/3;i++){
// 		let sub=s.substr(n,3);
//         if(sub[0]!='S'){
//             radiation +=1;
//         }if(sub[1]!='O'){
//             radiation +=1;
//         }
//         if(sub[2]!='S'){
//             radiation +=1;
//         }
// 		n+=3;
// 	}
//     return radiation;
// }


// console.log(marsExploration(s));


// let s='heeiamstacerrank';


// function hackerrankInString(s) {
//      let string='hackerrank';
//      let count=0;
//      if(s.length<string.length){
//      	return "NO";
//      }
//      for(var i=0;i<s.length;i++){
//      	if(count < s.length && s.charAt(i)==string.charAt(count)){
//      		count++;
//      	}
//      }
//      return count==string.length ? "YES" : "NO"

// }
// console.log(hackerrankInString(s));


// let s='We promptly judged antique ivory buckles for the next prize'

// function pangrams(s) {
// 	let str=s.toLowerCase();
// 	let alphabet='abcdefghijklmnopqrstuvwxyz'
// 	let count=0;
// 	for(var i=0;i<alphabet.length;i++){
// 		if(str.includes(alphabet[i])){
// 			count +=1;
// 		}
// 	}
// 	if (count == 26){
// 		return `pangram`;
// 	}else{
// 		return `not pangram`;
// 	}


// }



// console.log(pangrams(s));


// let s='abccddde';
// let queries=[1,3,12,5,9,10];

// function weightedUniformStrings(s, queries) {
// 	let strArr=[];
// 	let weightCheck=[];
// 	let temp=0;
// 	let add=0;
// 	let alphabet={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};
// for(var i=0;i<s.length;i++){
// 	if(temp!=alphabet[s[i]]){
// 		strArr.push(alphabet[s[i]]);
// 		temp=alphabet[s[i]];
// 		add=temp;
// 	}else if(temp == alphabet[s[i]]){
//           add +=temp;
//           strArr.push(add);
// 	}

// }
// 	queries.forEach(ele=>{
// 		if(strArr.includes(ele)){
//           weightCheck.push(`YES`)
// 		}else{
//           weightCheck.push(`NO`)
// 		}
// 	})
// 	return weightCheck;
// }
// console.log(weightedUniformStrings(s,queries));


// let c=[0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0];


// function jumpingOnClouds(c) {
// 		let jumps=0;
// 		let i=0;
// 	while(i<c.length){
// 		if(c[i+2]===0){
// 			i +=2;
// 		}
// 		else {
// 			i+=1;
// 		}
// 		if(i !==c.length){
// 			jumps++;
// 		}
// 	}
// 	return jumps;
// }
// console.log(jumpingOnClouds(c))
let s='babbaabbabaababaaabbbbbbbababbbabbbababaabbbbaaaaabbaababaaabaabbabababaabaabbbababaabbabbbababbaabb'
let n=860622337747
// let s='epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq'
// let n=549382313570
// let s='ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt'
// let n=685118368975
// let s='kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
// let n=736778906400;
// let s='aba';
// let n=10;
// let s='gfcaaaecbg';
// let n=547602;
// let s='a';
// let n=10000000;
console.log(s.length)
function repeatedString(s, n) {
     	let count=0;
		if(s.length==1){
			return s.includes('a') ? n : 0;
		}
	for(var i=0;i<s.length;i++){
		if(s[i]=='a'){
			count +=1;
		}
	}
	console.log(count);
	if(s[0]!='a'){
   	let repeat=n/s.length;
   	if((repeat%1)>0.4){
   		console.log(repeat)
   		let fix=parseFloat(repeat.toFixed(1));
   		console.log(fix)
   	return Math.ceil(fix*count)	
   }else{
	return Math.floor(repeat*count);
   }
	}else{
	return Math.round(n/s.length*count);
	}

}

console.log(repeatedString(s,n));






















































































































































































































































































































































































































































































































































































































































































































































































































