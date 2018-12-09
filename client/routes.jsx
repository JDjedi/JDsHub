import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import App from "../imports/client/App";
import Index from "../imports/client/Index";
import Gallery from "../imports/client/Gallery";
import Features from "../imports/client/Features";
import Contact from "../imports/client/Contact";

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

FlowRouter.route("/features", {
  name: "Features",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Features />
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
