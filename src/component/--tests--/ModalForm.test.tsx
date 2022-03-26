import ModalForm from "../ModalForm";
import * as ReactDOM from "react-dom";

describe("ModalForm component test",()=>{

    let container:HTMLDivElement

    beforeEach(()=>{
        container=document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(<ModalForm />,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })
    it("Renders correctly initial document",()=>{
        const btn=container.querySelectorAll("button");
        expect(btn).toHaveLength(1);
    })

})