import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { GiToken } from 'react-icons/gi'
import { Card, Col, Divider, Row, Table } from 'antd'
import React from 'react'
import CardSecondRowCol from './HomeDivideCard'

const CardSecondRowRoot = styled.div`
    height: 190px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default function HomeCardSecondRow({
    height,
    transaction,
    bondedToken,
    communnityPool,
    inflation,
    stakingApr,
    loading,
}) {
    return (
        <CardSecondRowRoot>
            <CardSecondRowCol
                icon1={
                    <Icon
                        icon="clarity:blocks-group-solid"
                        color="#7a7979"
                        width="32"
                    />
                }
                header1={'Height'}
                data1={height}
                icon2={
                    <Icon icon="uil:transaction" color="#7a7979" width="32" />
                }
                header2={'Transactions'}
                data2={transaction}
            />
            <CardSecondRowCol
                icon1={<GiToken size={24} color="#7a7979" />}
                header1={'Bonded Token'}
                data1={bondedToken}
                icon2={
                    <Icon
                        icon="mdi:google-circles-communities"
                        color="#7a7979"
                        width="32"
                    />
                }
                header2={'Community Pool'}
                data2={communnityPool}
            />
            <CardSecondRowCol
                icon1={
                    <Icon icon="octicon:graph-16" color="#7a7979" width="32" />
                }
                header1={'Inflation'}
                data1={inflation}
                icon2={
                    <Icon
                        icon="iconoir:percentage-square"
                        color="#7a7979"
                        width={32}
                    />
                }
                header2={'Staking APR'}
                data2={stakingApr}
            />
            <CardSecondRowCol
                icon1={
                    <Icon
                        icon="clarity:blocks-group-solid"
                        color="#7a7979"
                        width="32"
                    />
                }
                header1={'Staking APR'}
                data1={'1'}
                icon2={
                    <Icon icon="uil:transaction" color="#7a7979" width="32" />
                }
                header2={'Transactions'}
                data2={'2'}
            />
        </CardSecondRowRoot>
    )
}
