import React from "react";

import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import useSocket from "../context/SocketContext";

describe.only("useSocketContext", () => {
  it("works", () => {
    let results;
    const HookWrapper = () => {
      results = useSocket();
      return <></>;
    };
    mount(<HookWrapper />);
    expect(results.socket).toEqual(0);
  });
});
