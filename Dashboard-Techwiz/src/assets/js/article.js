const fetchData = async (url, method, callback, data) => {

    let response = await fetch('http://api.techwarriors.click/api/Article/GetList?PageSize=50&CurrentPage=1&fbclid=IwAR078m_LuZdSR9u4iDbhbYIawBVkyeoAjKhZel2fmuHOGMyokMWoSii8ZP4', 
    {
        method: method ?? 'GET',
    },
    data ? JSON.stringify(data) : ''
    )
    response  = await response.json()
    callback ? callback(response.data) : ''
    console.log(response.data)
};

const GetListArticle = (data) => {
    let table = document.getElementById('table-article-list')
    let html = data.map((item, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${item.title}</td>
                <td>
                    <img src="../assets/images/products/s1.jpg" alt="" width="50" height="50" class="rounded mx-auto">
                </td>
                <td>
                    ${validateDatetime(item.createDate)}
                </td>
                <td>
                    ${item.modifeDate}
                </td>
            </tr>
        `
    })
    table.innerHTML = html.join('')
}

const validateDatetime = (datetimeString) => {
    // Kiểm tra định dạng ngày và giờ (datetime) hợp lệ
    // Định dạng mẫu: YYYY-MM-DDTHH:MM:SS.sss
  
    // var regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/;
  
    // if (!regex.test(datetimeString)) {
    //   // Định dạng không hợp lệ
    //   return false;
    // }
  
    // Kiểm tra tính hợp lệ của ngày và giờ
    var datetime = new Date(datetimeString);
  
    if (isNaN(datetime.getTime())) {
      // Ngày và giờ không hợp lệ
      return false;
    }
    
    // Trích xuất thông tin ngày và giờ
    var month = datetime.getMonth() + 1; // Lấy tháng tính từ 0, nên cần cộng thêm 1
    var hours = datetime.getHours();
    var minutes = datetime.getMinutes();
    var day = datetime.getDate();
    var year = datetime.getFullYear();
  
    // Định dạng lại chuỗi ngày và giờ
    var formattedDatetime = `${padZero(month)}:${padZero(hours)} / ${padZero(day)}-${padZero(month)}-${year}`;
  
    // Trả về định dạng đã định kỳ
    return formattedDatetime;
}
const padZero = (number) => {
    return number.toString().padStart(2, '0');
}
// GetListArticle()
fetchData(null, 'GET', GetListArticle)