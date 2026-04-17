import App from "./App"
import {render,screen,fireEvent, getAllByText, getByText, getByTestId} from "@testing-library/react"
describe("Test",()=>{
    it("Increment Testi Çalışıyor",()=>{
        render(<App/>);
        //initial kontrolu
        expect(screen.getByTestId("counter").textContent).toBe("0");
        const button = screen.getByText("Increment");
        fireEvent.click(button);
        expect(screen.getByTestId("counter").textContent).toBe("1");

    });
    it("Decrement Çalışıyor", ()=>{
        render(<App/>);
        const counterValue = Number(screen.getByTestId("counter").textContent)
        const expectedValue = (counterValue-1).toString()
        const button = screen.getByText("Decrement");
        fireEvent.click(button);
        expect(screen.getByTestId("counter").textContent).toBe(expectedValue)
    
    });
    it("Reset Çalışıyor", ()=>{
        render(<App/>);
        const button = screen.getByText("Restart");
        fireEvent.click(button);
        expect(screen.getByTestId("counter").textContent).toBe("0")
    });
    it("Decrement Çalışıyor", ()=>{
        render(<App/>);
        const counterValue = Number(screen.getByTestId("counter").textContent)
        const expectedValue = (counterValue * -1).toString()
        const button = screen.getByText("ChangeSign");
        fireEvent.click(button);
        expect(screen.getByTestId("counter").textContent).toBe(expectedValue)
    
    });
})