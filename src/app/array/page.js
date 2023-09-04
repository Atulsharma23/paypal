import React from "react";

export default function Demoone() {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const arr3 = arr1.concat(arr2);
  const arr3string = arr3.toString();
  const arr45 = Demotwo();
  return (
    <div className="demo">
      {arr3string}
      {arr45}
    </div>
  );
  console.log({ arr45 });
}

export function Demotwo() {
  const arr4 = [1, 33, 3, 2, 3, 4, 2, 32, 3, 24, , 2, 32424232, 4, 424];
  const arr5 = [4, 5, 4, 53, 4, 3, 4, 3, 4, 3, 43, 43, 44, 34, 3, 43];
  const arr6 = arr4.concat(arr5);
  const arr6string = arr6.toString();
  return <div> {arr6string}</div>;
}
export function generateMetadata(){
  return{
    title:"Array Fucntion"
  }
}