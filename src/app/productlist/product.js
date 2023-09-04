"use client";
export default function Awesome({price}) {
  console.log(price);
  return (
    <div class="btne">
      <button onClick={() => alert(price)}> check price</button>
    </div>
    
  );
}
