.yui-navset .yui-nav li a, .yui-navset .yui-content {
      border:1px solid #999999;  /* label and content borders */
    }
    .yui-navset .yui-nav .selected a, .yui-navset .yui-nav a:hover, .yui-navset .yui-content {
      background-color:; /* active tab, tab hover, and content bgcolor */
    }
    .yui-navset .yui-nav li em { padding:.2em; } /* tab padding */
    /* defaults to orientation &quot;top&quot; */
    .yui-navset .yui-nav .selected a {
      border-bottom-width:0; /* no bottom border for active tab */
      padding-bottom:1px; /* to match height of other tabs */
    }
    .yui-navset .yui-content {
      margin-top:-1px; /* for active tab overlap */
    }
    /* overrides for other orientations */
    .yui-navset-bottom .yui-nav .selected a {
      border-width:0 1px 1px; /* no top border for active tab */
      padding:1px 0 0; /* to match height of other tabs */
    }
    .yui-navset-bottom .yui-content {
      margin:0 0 -1px; /* for active tab overlap */
    }
    .yui-navset-left .yui-nav li.selected a {
      border-width:1px 0 1px 1px; /* no right border for active tab */
      padding:0 1px 0 0; /* to match width of other tabs */
    }
    .yui-navset-left .yui-content {
      margin:0 0 0 -1px; /* for active tab overlap */
    }
    .yui-navset-right .yui-nav li.selected a {
      border-width:1px 1px 1px 0; /* no left border for active tab */
      padding:0 0 0 1px; /* to match width of other tabs */
    }
    .yui-navset-right .yui-content {
      margin:0 -1px 0 0; /* for active tab overlap */
    }
    .yui-content { padding:1em; /* pad content container */
    }
    .yui-navset .yui-content {
      border:0px solid #6e6e6e;
      padding: 0px 0px 0px 0px;
    }
    .yui-navset .yui-nav .selected a, .yui-navset .yui-nav a:hover {
      background:linear-gradient(to bottom, #464646 20%,#7E7E7E 80%);
      border-radius:1px;
      margin:5px;
    }
    .yui-navset .yui-nav li {
      margin-right: -0.2em;
    }
    .yui-navset .yui-nav li a {
      background:linear-gradient(to bottom, #7E7E7E 20%,#464646 80%);
      border-radius:1px;
      margin:5px;
    }
    .yui-navset .yui-nav li a em {
      background:transparent url() no-repeat top right;
      padding:0.2em;
    }
    /* top oriented */
    .yui-navset-top .yui-nav { margin-bottom:-18px; } /* for overlap, based on content border-width */
    .yui-navset-top .yui-nav li a {
      border-bottom:1x solid #999999;
    }
    .yui-navset-top .yui-nav .selected a { border-bottom:0px solid #999999; }
    .yui-navset-top .yui-nav .selected a em { padding-bottom:0.2em; } /* adjust height */
