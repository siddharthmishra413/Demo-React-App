import React, { Component } from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';

const { Content } = Layout;

class Awards extends Component {
  render() {
    return (
      <Layout>
        <div className="innerCont">
          <HeaderComp />
          <Content>
            <div className="award-header">
              <h1>Awards</h1>
            </div>

            <div className="cat-page">
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div className="list-item-main">
                    <div className="list-item">
                      <h3>Clio Entertainment</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                      </p>

                      <div className="review-btn">
                        <a href="">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </a>
                      </div>

                      <div className="review-entry mt">
                        <div className="details">
                          <p>
                            Entries Open: <span>January 27, 2020</span>
                          </p>
                          <p>
                            First deadlines: <span>March 20, 2020</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md-ft-btn">
                      <div className="md-bt-col">
                        <Button type="primary" block disabled>
                          Get Started
                        </Button>
                      </div>
                      <div className="md-bt-col">
                        <p href="#" className="cust-entry">
                          {' '}
                          My Entries <Input type="text" value="0" />{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="list-item-main">
                    <div className="list-item">
                      <h3>Clio Health</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                      </p>

                      <div className="review-btn">
                        <a href="">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </a>
                      </div>

                      <div className="review-entry mt">
                        <div className="details">
                          <p>
                            Entries Open: <span>January 27, 2020</span>
                          </p>
                          <p>
                            First deadlines: <span>March 20, 2020</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md-ft-btn">
                      <div className="md-bt-col">
                        <Button type="primary" block disabled>
                          Get Started
                        </Button>
                      </div>
                      <div className="md-bt-col">
                        <p href="#" className="cust-entry">
                          {' '}
                          My Entries <Input type="text" value="0" />{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="list-item-main">
                    <div className="list-item">
                      <h3>Clio Cannabis</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                      </p>

                      <div className="review-btn">
                        <a>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </a>
                      </div>

                      <div className="review-entry mt">
                        <div className="details">
                          <p>
                            Entries Open: <span>January 27, 2020</span>
                          </p>
                          <p>
                            First deadlines: <span>March 20, 2020</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md-ft-btn">
                      <div className="md-bt-col">
                        <Button type="primary" block className="active">
                          Get Started
                        </Button>
                      </div>
                      <div className="md-bt-col">
                        <p href="#" className="cust-entry">
                          {' '}
                          My Entries <Input type="text" value="0" />{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <div className="clear"></div>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default Awards;
