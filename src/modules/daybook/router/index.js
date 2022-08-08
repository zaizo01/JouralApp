export default {
  name: "daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/DayBookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "../views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(/* webpackChunkName: "entry" */ "../views/EntryView.vue"),
    },
  ],
};
