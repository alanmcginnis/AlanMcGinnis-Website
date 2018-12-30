this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["careerOverview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <span class=\"icon "
    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h2 class=\"section-title\">"
    + container.escapeExpression(((helper = (helper = helpers.sectionTitle || (depth0 != null ? depth0.sectionTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sectionTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "  <h2 class=\"section-title\">Career Summary</h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pOneStrong : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <p><strong>"
    + alias4(((helper = (helper = helpers.pOneStrong || (depth0 != null ? depth0.pOneStrong : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pOneStrong","hash":{},"data":data}) : helper)))
    + "</strong> "
    + alias4(((helper = (helper = helpers.pOne || (depth0 != null ? depth0.pOne : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pOne","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <p>"
    + container.escapeExpression(((helper = (helper = helpers.pOne || (depth0 != null ? depth0.pOne : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pOne","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pTwoStrong : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <p><strong>"
    + alias4(((helper = (helper = helpers.pTwoStrong || (depth0 != null ? depth0.pTwoStrong : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pTwoStrong","hash":{},"data":data}) : helper)))
    + "</strong> "
    + alias4(((helper = (helper = helpers.pTwo || (depth0 != null ? depth0.pTwo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pTwo","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <p>"
    + container.escapeExpression(((helper = (helper = helpers.pTwo || (depth0 != null ? depth0.pTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pTwo","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sectionTitle : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pOne : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pTwo : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});