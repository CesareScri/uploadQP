const d = document;

function $(id) {
    return d.querySelector(id)
}

const c = $('.container')
const n = $('#noteTitle')
const t = $('#textarea')
const u = $('.result')
const l = $('#linkR')
const rT = $('#resultTitle')
const rB = $('#resultBody')

$('#btn').onclick = () => {
    if (n.value == 0) {

        $('.alert').style.display = 'flex'
        $('#alertFile').innerHTML = 'Title is required!'
        n.style.border = '2px solid #dc3545'
        setTimeout(() => {
            $('.alert').style.display = 'none'
        }, 3000);

    } else if (t.value == 0) {
            $('.alert').style.display = 'flex'
            $('#alertFile').innerHTML = 'Body cannot be empty!'
            t.style.border = '2px solid #dc3545'

        setTimeout(() => {
            $('.alert').style.display = 'none'
        }, 3000);
            
    } else {

        n.style.border = '2px solid #20c997'
        t.style.border = '2px solid #20c997'
        
        uploadNote(t.value, n.value)
    }
}

async function  uploadNote(a, b) {
    const data = {title: b, body: a}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const url = await fetch('/create-note',options)
    const json = await url.json()

    c.style.display = 'none'
    u.style.display = 'flex'

    rT.innerHTML = b
    rB.innerHTML = a
    l.innerHTML = json.link
    l.href =  json.link
    l.target = '_blank'

}

const dato = {title:"cc Test",body:"#HITS CC: 6011208816628260|11|2028|531\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208863877505|11|2025|388\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208813413013|11|2027|157\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208836456635|11|2025|083\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208804710328|11|2026|676\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208887062548|11|2028|218\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208840066701|11|2027|686\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208841165437|11|2026|767\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208874111522|11|2028|606\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208812433640|11|2025|422\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208832645843|11|2028|631\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208862845636|11|2026|721\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208845454183|11|2027|148\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208821778860|11|2027|621\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208872584613|11|2027|683\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208842514450|11|2028|443\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208824674736|11|2027|541\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208838644022|11|2028|455\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208825174835|11|2028|742\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208870753376|11|2028|684\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208851044837|11|2027|001\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208865725462|11|2027|045\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208868572283|11|2025|622\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ\n#HITS CC: 6011208867081401|11|2025|638\n➤Result: CHARGE ✅\n➤Receipt : Here\n➤Bypassing: 0\n➤Host: ₲øøĐ"}

console.log(JSON.stringify(dato.body.split('\n')[0]))

for (const key in dato.body.slice('\n').length) {
    
}