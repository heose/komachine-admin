import React from 'react';
import {inject, observer} from 'mobx-react';

@inject(({store}) => {
  return {companyStore: store.companyStore};
})
@observer
class CompanyList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {query, companyStore} = this.props;
    return (
      <div>
        <div>
          {companyStore.state}
        </div>
        <div>
          {companyStore.companies.length}
        </div>
      </div>
    );
  }
}

export default CompanyList;
