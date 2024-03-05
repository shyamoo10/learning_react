
//like html self closing tags are not allowed in jsx , instead we must close them manually !! 
 // eg: <li> ==>  <li/>
 //     <input> ==>  <input />



function HtmlToJsx(){
    return (
        <div>
            <h1>Test title</h1>
    <ol class="test-list">
  <li/>List item 1
  <li/>List item 2
  <li/>List item 3
</ol>
<svg>
   <circle cx="25" cy="75" r="20" stroke="green" strokewidth="2" />
</svg>
<form><input type="text"/></form>
        </div>
    )
}

export default HtmlToJsx