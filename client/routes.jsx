import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import App from "../imports/client/App";
import Index from "../imports/client/Index";
import Gallery from "../imports/client/Gallery";
import About from "../imports/client/About";
import Contact from "../imports/client/Contact";
import Event from "../imports/client/Event";

FlowRouter.route("/", {
  name: "Home",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Index />
    });
  }
});

FlowRouter.route("/gallery", {
  name: "Gallery",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Gallery />
    });
  }
});

FlowRouter.route("/about", {
  name: "About",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <About />
    });
  }
});

FlowRouter.route("/contact", {
  name: "Contact",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Contact />
    });
  }
});

FlowRouter.route("/event", {
  name: "Event",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Event />
    });
  }
});




