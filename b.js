
function dataLoading() {
    fetch('https://raw.githubusercontent.com/hideto-work/HomePage/main/data.json')
        .then(response => response.json())
        .then(data => {
            // HTML要素を特定し、データを出力する
            var outputElement = document.getElementById("output");

            var firstName = data.firstName

            var familyName = data.familyName

            //alert(data.familyName)

            outputElement.innerHTML = JSON.stringify(familyName) + " | " + JSON.stringify(firstName);

            //outputElement.innerHTML = JSON.stringify(data)

        });
}

function test() {
    alert('Hello')
}


// const employees = data.employees;
// const developer = employees.find(employee => employee.position === "Developer");
// const developerName = developer.name;
// console.log(developerName);




{/* <script>
  // JavaScriptでデータを取得する処理
  var data = "<strong>取得したデータ</strong>";

  // HTML要素を特定し、データを出力する
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = data;
</script> */}