import React from 'react';
import '../index.css';

// {
//   collectibleOwner: '8cc8da168762e1c8f27cb36be90d23e075b391ee',
//   collectibleTokenId: '0000000000000000000000000000000000000000000000000000000000000001',
//   collectibleInstagramId: '1346330791181662504_51228965',
//   collectibleLastSoldPrice: null,
//   collectibleCurrentBidder: null,
//   collectibleCurrentBidPrice: null,
//   collectibleCreator: '8cc8da168762e1c8f27cb36be90d23e075b391ee',
//   imgUrl: 'https://...'
// }

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Dashboard = (props) => {

  const mappedCollectibles = props.collectibles.map((c) => {
    console.log('collectible', c)
    return (


          <TableRow>
            <TableRowColumn>{c.collectibleTokenId}</TableRowColumn>
            <TableRowColumn>
              <a href={`https://ropsten.etherscan.io/address/${c.collectibleOwner}`} target="_blank">
                {c.collectibleOwner}
              </a>
            </TableRowColumn>
            <TableRowColumn>
            <a href={`https://ropsten.etherscan.io/address/${c.collectibleCreator}`} target="_blank">
              {c.collectibleCreator}
            </a>
          </TableRowColumn>
          <TableRowColumn>
            <div className="coll-img-container">
              <img className="coll-img" src={ c.imgUrl } alt="collectible"/>
            </div>
          </TableRowColumn>
          </TableRow>
    )
  })

  return (
    <div className="foo">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Asset ID</TableHeaderColumn>
            <TableHeaderColumn>Owner</TableHeaderColumn>
            <TableHeaderColumn>Creator</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
      { mappedCollectibles }
        </TableBody>
      </Table>
    </div>
  );
}

export default Dashboard;
