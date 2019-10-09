import React from 'react'
import LoopList from '../components/loop-list'
import PageWrap from '../layouts/page-wrap'
import AsLink from '../components/as-link'
import Card from '../components/card'
import Link from 'next/link'

import {subtitles, homePageCardLinks} from '../lists'
import logo from '../static/daemon.svg'

const Home = () => {
  return (
    <PageWrap title="home" className>
      <div className="hero">
      <div className="hero__bg"></div>
        <h1 className="title">Charles Morgan</h1>
        <div className="code-bg"></div>
        <div className="row">
          <img src={logo} width={350} style={{margin: '20px auto'}}/>
        </div>

        <LoopList
          list={subtitles}
          interval={2250}
          render={value => <p className="description">{value}</p>}
        />

      </div>
      <section className="section one">
        <p>Section Goes Here...</p>
      </section>
      <section className="section two">
        <p>Section Goes Here...</p>
      </section>
      <section className="section three">
        <p>Section Goes Here...</p>
      </section>
      <div className="row">
        {homePageCardLinks.map(({href, title, desc, styleObject}) => (
          <AsLink key={`link-${href}`} href={href}>
            <Card title={title} desc={desc} styleObject={styleObject}/>
          </AsLink>
        ))}
      </div>
    </PageWrap>
  )
}

export default Home
