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
  var table =
    "<tr><th>Requisition ID</th><th>Job Title</th><th>Start Date</th><th>End Date</th><th>City</th></tr>";
  var x = xmlDoc.getElementsByTagName("JobRequisition");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("RequisitionId")[0].childNodes[0].nodeValue +
      "</td><td>" +
      (x[i].getElementsByTagName("JobTitle")[0].childNodes.length >= 1
        ? x[i].getElementsByTagName("JobTitle")[0].childNodes[0].nodeValue
        : "") +
      "</td><td>" +
      x[i].getElementsByTagName("StartDate")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("EndDate")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("City")[0].childNodes[0].nodeValue +
      "</td><td><a target='_blank' href=" +
      (x[i].getElementsByTagName("URL")[0].childNodes.length >= 1
        ? x[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue
        : "") +
      ">" +
      "Job Link" +
      "</a></td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
