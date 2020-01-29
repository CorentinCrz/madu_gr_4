import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../../App";
import { shallow } from "../setup/test-setup";

const mockStore = configureStore();

const mockDispatchfn = jest.fn();

describe("<App />", () => {
  let wrapper: any;
  const props: any = {};

  it("defines the component", done => {
    wrapper = shallow(
      <Provider store={mockStore()}>
        <App {...props} dispatch={mockDispatchfn} />
      </Provider>
    );
    expect(wrapper).toBeDefined();
    done();
  });
});
