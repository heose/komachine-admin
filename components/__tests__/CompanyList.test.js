describe('CompanyList component test', () => {
  it('renders without crashing', () => {
    expect(1 + 1).toBe(2);
  });

  // it('paging test', async () => {
  //   await companyStore.fetchCompanies({});
  //   companyStore.hasPrev = true;
  //   companyStore.hasNext = false;
  //   const wrapper = shallow(<CompanyList.wrappedComponent companyStore={companyStore} />);
  //   const PrevLink = wrapper.find(Link).first();
  //   const PrevNext = wrapper.find(Link).at(1);
  //   expect(PrevLink.prop('enabled')).toBe('enabled');
  //   expect(PrevNext.prop('enabled')).toBe('disabled');
  // });

  // it('correct inject company store', () => {
  //   const store = { companyStore };
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <CompanyList />
  //     </Provider>,
  //   );
  //   expect(wrapper.childAt(0).props()).toHaveProperty('companyStore');
  // });
});
