function buttonClick(columnNum) {
	let messageItem = document.createElement("div");
	let nameSpan = document.createElement("span");

	let messageArea1 = document.getElementById(`0div0`);
	let messageArea2 = document.getElementById(`1div0`);
	let userName = document.getElementById(`${columnNum}input2`).value;
	let userMessage = document.getElementById(`${columnNum}textarea4`).value;

	nameSpan.innerText = `${userName}: `;
	nameSpan.style.fontWeight = "bold";
	messageItem.appendChild(nameSpan);
	messageItem.innerHTML += userMessage;

	messageArea1.appendChild(messageItem);
	let messageItemClone = messageItem.cloneNode(true);
	messageArea2.appendChild(messageItemClone);
}

//creates all elements
let [body] = document.getElementsByTagName("body");
body.style.display = "flex";
body.style.justifyContent = "space-around";
for (let i = 0; i < 2; i++) {
	let containerDiv = document.createElement("div");
	let textarea = document.createElement("textarea");
	let name = document.createElement("input");
	let nameLabel = document.createElement("div");
	let textAreaLabel = document.createElement("div");
	let messageArea = document.createElement("div");
	let submit = document.createElement("button");

	messageArea.style.overflowY = "scroll";
	messageArea.style.overflowWrap = "break-word";
	messageArea.style.height = "80vh";
	messageArea.style.border = "1px solid black";
	messageArea.style.marginBottom = "5%";
	submit.innerHTML = "Submit";
	textAreaLabel.innerHTML = "Message:";
	nameLabel.innerHTML = "Name: ";
	textarea.style.width = "100%";
	containerDiv.style.width = "40%";
	containerDiv.id = i;

	containerDiv.appendChild(messageArea);
	containerDiv.appendChild(nameLabel);
	containerDiv.appendChild(name);
	containerDiv.appendChild(textAreaLabel);
	containerDiv.appendChild(textarea);
	containerDiv.appendChild(submit);

	let children = containerDiv.children;
	for (let j = 0; j < children.length; j++) {
		children[j].id = `${i}${children[j].localName}${j}`;
	}

	body.appendChild(containerDiv);
}

document.getElementById("0button5").addEventListener("click", () => {
	buttonClick(0);
});
document.getElementById("1button5").addEventListener("click", () => {
	buttonClick(1);
});

document.getElementById("0textarea4").addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		buttonClick(0);
	}
});
document.getElementById("1textarea4").addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		buttonClick(1);
	}
});
