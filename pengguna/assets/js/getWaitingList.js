import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetEvent = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/getdataevent";

export const tableEvent = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NO#</span
    >
  </div>
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMAEVENT#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#JENISEVENT#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#HARGA#</span
  >
</div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#KETERANGAN#</span
    >
  </div>
</td>

</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
  hide("skeletonLoader");
}
let staticNumber = 1;
export function isiRow(value) {
  const content = tableEvent
    .replace("#NO#", staticNumber++)
    .replace("#NAMAEVENT#", value.tujuaneven)
    .replace("#JENISEVENT#", value.jemputan)
    .replace("#HARGA#", value.harga)
    .replace("#KETERANGAN#", value.keterangan);

  addInner("tableEvent", content);
}
