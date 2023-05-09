import React from 'react'
import './custstyle.css'

export const Custdisplay = () => {
  return (
    <>
    <div className='main'>
    <div className='position-absolute top-50 start-50 translate-middle bg-dark text-white'>
    <section class='displayTable '>
<div class="table-title">
<h3>Data Table</h3>
</div>
<table class="table-fill">
<thead>
<tr className='p-3 mb-2 bg-danger text-white'>
<th class="text-left">Table No.</th>
<th class="text-left">Status</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">Table 1</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 2</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 3</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 4</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 5</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 6</td>
<td class="text-left">Free</td>
</tr>
<tr>
<td class="text-left">Table 7</td>
<td class="text-left">Free</td>
</tr>
</tbody>
</table>
</section>
    </div>


    </div>
    </>
  )
}
