"use client";

export default function Page() {
  function onButtonClick() {
    alert("<3");
  }

  return (
    <div className="space-y-4">
      <button
        className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
        onClick={onButtonClick}
      >
        En fin knapp
      </button>

      <p>
        <a
          href="https://enclose.horse/"
          target="_blank" // open in a new browser tab
          className="underline text-blue-500 hover:text-blue-600"
        >
          En mystisk länk
        </a>
      </p>

      <ul className="list-disc">
        <li>En punkt i en punktlista</li>
        <li>Ännu en punkt i en punktlista</li>
      </ul>
    </div>
  );
}
