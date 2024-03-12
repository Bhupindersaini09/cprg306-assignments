import ItemList from "./item-list";

export default function Item({ name, quantity, category }) {
  return (
    <main className="flex justify-center items-center">
      <div>
        <ul className="p-2.5 ml-5 pt2 border-2 border-zinc-950 mb-3 w-96  bg-zinc-800">
          <li className="font-bold text-xl">{name}</li>
          <li className="">
            Buy {quantity} in {category}
          </li>
        </ul>
      </div>
    </main>
  );
}
