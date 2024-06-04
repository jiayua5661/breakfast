let storeList = [
    { "name": "北市寶興概念店", "tel": "02-23050189", "address": "台北市萬華區寶興街47號" },
    { "name": "北市木新概念店", "tel": "02-86615680", "address": "台北市文山區忠順街一段26巷15號" },
    { "name": "北市內湖概念店", "tel": "02-87513038", "address": "台北市內湖區內湖路1段602號" },
    { "name": "北市永吉概念店", "tel": "02-27560155", "address": "台北市信義區永吉路326巷42號" },
    { "name": "南港忠孝", "tel": "02-27831177", "address": "台北市南港區忠孝東路7段613號" },
    { "name": "北市活力崇德", "tel": "02-87322303", "address": "台北市信義區崇德街92號" },
    { "name": "信義松德", "tel": "02-27597911", "address": "台北市信義區松德路211號" },
    { "name": "台中忠明概念店", "tel": "04-22029402", "address": "台中市北區忠明路369號" },
    { "name": "潭子活力福貴", "tel": "04-25371098", "address": "台中市潭子區福貴路233號" },
    { "name": "台中活力健行店", "tel": "04-22353598", "address": "台中市北區健行路174號" },
    { "name": "潭子活力福潭", "tel": "04-25393737", "address": "台中市潭子區福潭路872號" },
    { "name": "嘉義嘉北", "tel": "05-2772428", "address": "嘉義市東區嘉北街97巷12號" },
    { "name": "新港媽祖廟", "tel": "05-3741363", "address": "嘉義縣新港鄉宮前村登雲路60號" },
    { "name": "早安東石", "tel": "05-3732980", "address": "嘉義縣東石鄉東石村197號" },
    { "name": "善化活力中山", "tel": "06-5852892", "address": "台南市善化區中山路138號" },
];

function searchstore() {
    if (document.getElementById('inputadd').value) {
        document.getElementById('mapstoreList').innerHTML = `<tr>
                <th>門市名稱</th>
                <th>電話</th>
                <th>地址</th>
                <th>撥號</th>
                <th>導航</th>
            </tr>`;
        for (let i = 0; i < storeList.length; i++) {
            if (storeList[i].address.includes(document.getElementById('inputadd').value)) {
                document.getElementById('mapstoreList').innerHTML += `<tr>
                <td>${storeList[i].name}</td>
                <td>${storeList[i].tel}</td>
                <td>${storeList[i].address}</td>
                <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                <td class="text-center"><a href="https://maps.app.goo.gl/cWnbSZwyurgTRJTq8"><i
                            class="fa-solid fa-location-dot"></i></a></td>
            </tr>`;
            }
        }
    }
    else {
        document.getElementById('mapstoreList').innerHTML = `<tr>
                <th>門市名稱</th>
                <th>電話</th>
                <th>地址</th>
                <th>撥號</th>
                <th>導航</th>
            </tr>`;
        for (let i = 0; i < storeList.length; i++) {
            document.getElementById('mapstoreList').innerHTML += `<tr>
                <td>${storeList[i].name}</td>
                <td>${storeList[i].tel}</td>
                <td>${storeList[i].address}</td>
                <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                <td class="text-center"><a href="https://maps.app.goo.gl/cWnbSZwyurgTRJTq8"><i
                            class="fa-solid fa-location-dot"></i></a></td>
            </tr>`;
        }
    }
}