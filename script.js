String.prototype.format = function(...args) {
    return this.replace(/{(\d+)}/g, (match, index) => {
        return args[index] !== undefined ? args[index] : match;
    });
};

const template = `<p style="width:100%; text-align:center; font-size:22px;"><span style="font-weight: bold">{0}</span> <span>{2}</span> - <span>{3}</span> <span style="font-weight: bold">{1}</span></p>`

const overlayDiv = document.createElement('div');
overlayDiv.id='youtube-ligue2-overlay';
overlayDiv.style.position = 'fixed';
overlayDiv.style.color = 'white';
overlayDiv.style.top = '80px';
overlayDiv.style.left = '30px';
overlayDiv.style.width = '25%';
overlayDiv.style.height = '50px';
overlayDiv.style.background = 'rgba(0, 0, 0, 0.5)';
overlayDiv.style.zIndex = '9999';
overlayDiv.innerHTML = '';

document.body.appendChild(overlayDiv);

const videoElement = document.querySelector("video");

let intervalTime = 500;
let interval = null;
let playing = false;

videoElement?.addEventListener("timeupdate", () => {
    checkTimecode();
});

function checkTimecode() {
    const tc = getTimecode();
    const data = findDataForTimecode(mock_data, tc);
    if(data){
        overlayDiv.innerHTML = template.format(data["home"], data["away"], NaN, NaN);
    }
}

function getTimecode() {
    return videoElement?.currentTime;
}

function findDataForTimecode(data, timecode) {
    const dataK = Object.keys(data);
    let result = null;

    if (dataK) {
        let left = 0;
        let right = dataK.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (parseFloat(dataK[mid]) < timecode) {
                result = data[dataK[mid]];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return result;
}