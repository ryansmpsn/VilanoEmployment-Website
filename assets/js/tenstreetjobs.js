function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "tenstreet.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<thead><tr><th>Requisition ID</th><th>Start Date</th><th>End Date</th></tr></thead><tbody>";
  var x = xmlDoc.getElementsByTagName("JobRequisition");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("RequisitionId")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("StartDate")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("EndDate")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  table += "</tbody>";

  // console.log(table);
  document.getElementById("example").innerHTML = table;
}

loadXMLDoc();
