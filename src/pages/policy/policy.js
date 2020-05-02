import React, { Component } from 'react';
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import './policy.scss';

class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'light',
      footerActive: false,
      fullpageAnimation: false
    };
  }

  render() {
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title="new react ssr about page"
            description="about page description"
            content="about us page content"
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div className="page-wrapper policy-page">
            <section className="full-page-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <div className="col-md-10 col-xs-12">
                      <h1>Privacy Policy</h1>
                      <p className="intro">
                        We, FindCreative, a Limited Liability Partnership
                        incorporated under the Limited Liability Partnership
                        Act, 2008 (hereinafter referred to as "LLP"), having its
                        registered office at _______________________Mumbai,
                        India, the creator of this Privacy Policy ensure our
                        firm commitment to your privacy vis-à-vis the protection
                        of your priceless information. In order to endow you
                        with our uninterrupted services, we may collect and, in
                        some circumstances, disclose information about you. To
                        enhance better protection of your privacy we provide
                        this notice explaining our information practices and the
                        choices you can make about the way your information is
                        collected and used. All visitors to our website are
                        advised to read and understand our Privacy Policy
                        carefully, as by accessing the Website you agree to be
                        bound by the terms and conditions of the Privacy Policy
                        and consent to the collection, storage and use of
                        information relating to you as provided herein. If you
                        do not agree with the terms and conditions of our
                        Privacy Policy, including in relation to the manner of
                        collection or use of your information, please do not use
                        or access the Website. If you have any questions or
                        concerns regarding this privacy policy, you should
                        contact our customer support desk at
                        support@findcreative.in. ANY CAPITALIZED WORDS USED
                        HENCEFORTH SHALL HAVE THE MEANING ACCORDED TO THEM UNDER
                        THIS AGREEMENT. FURTHER, ALL HEADINGS USED HEREIN ARE
                        ONLY FOR THE PURPOSE OF ARRANGING THE VARIOUS PROVISIONS
                        OF THE AGREEMENT IN ANY MANNER. NEITHER THE USER NOR THE
                        CREATERS OF THIS PRIVACY POLICY MAY USE THE HEADING TO
                        INTERPRET THE PROVISIONS CONTAINED WITHIN IT IN ANY
                        MANNER.
                      </p>

                      <h5>DEFINITIONS</h5>
                      <div className="content">
                        <ul>
                          <li>
                            "We", "Our", and "Us" shall mean and refer to the
                            creators of this privacy policy.
                          </li>
                          <li>
                            "You", "Your", "Yourself" and "User" shall mean and
                            refer to natural and legal individuals who use the
                            Website.{' '}
                          </li>
                          <li>
                            "Personal Information" shall mean and refer to any
                            personally identifiable information that We may
                            collect from You. For removal of any doubts, please
                            refer to Clause 2.
                          </li>
                          <li>
                            "Third Parties" refer to any Website, Company or
                            individual apart from the User and the creator of
                            the Website.
                          </li>
                        </ul>
                      </div>

                      <h5>OVERVIEW</h5>
                      <div className="content">
                        <p>
                          We commit to respecting your online privacy data. We
                          further recognize your need for appropriate protection
                          and management of any personally identifiable
                          information ("Personal Information") you share with
                          us. Information that is considered personal about you
                          by us includes, but is not limited to, your name,
                          address, email address, phone number or other contact
                          information. In order to avail any services through
                          the website, you are required to provide the following
                          information which includes, but is not limited to:
                          Name; User name; Password; Address; Mobile number; and
                          E-mail address; This privacy policy also applies to
                          data we collect from users who are not registered as
                          members of this site, including, but not limited to,
                          browsing behavior, pages viewed etc.
                        </p>
                      </div>

                      <h5>
                        NOTIFICATION OF MODIFICATIONS AND CHANGES TO THE T&C AND
                        PRIVACY POLICY
                      </h5>
                      <div className="content">
                        <p>
                          We reserve the right to change the Terms and Privacy
                          Policy from time to time as we deem fit, without any
                          intimation to you, and your continued use of the site
                          will signify your acceptance of any amendment to these
                          terms. You are therefore advised to re-read the Terms
                          of Service on a regular basis. Should it be that you
                          do not accept any of the modifications or amendments
                          to the Terms, you may terminate your use of this
                          website immediately.
                        </p>
                      </div>

                      <h5>INFORMATION WE COLLECT</h5>
                      <div className="content">
                        <p>
                          Our site's online requisition form requires users to
                          give us contact information (like your name, address,
                          telephone number and email address), and demographic
                          information (like your zip code/pin code). As a
                          member, you are required to provide a valid email
                          address at registration and this email address will be
                          your username and it will represent your identity on
                          our website. This information is compiled and analyzed
                          on an aggregated basis. This information may include
                          the URL that you just came from (whether this URL is
                          on the Site or not), which URL you next go to (whether
                          this URL is on the Site or not), your computer browser
                          information, your IP address, and other information
                          associated with your interaction with the Site. We
                          also collect and store personal information provided
                          by you from time to time on the Site. We only collect
                          and use such information from you that we consider
                          necessary for achieving a seamless, efficient and safe
                          experience, customized to your needs including: To
                          enable the provision of services opted for by you; To
                          communicate necessary account and service related
                          information from time to time; To allow you to receive
                          quality customer care services; To undertake necessary
                          fraud and money laundering prevention checks, and
                          comply with the highest security standards; To comply
                          with applicable laws, rules and regulations; and To
                          provide you with information and offers on services,
                          on updates, on promotions, on related, affiliated or
                          associated service providers and partners that we
                          believe would be of interest to you. Where any service
                          requested by you involves a third party, such
                          information as is reasonably necessary by the LLP to
                          carry out your service request may be shared with such
                          third party. We also do use your contact information
                          to send you offers based on your interests and prior
                          activity. The LLP may also use contact information
                          internally to direct its efforts for service
                          improvement, to contact you as a survey respondent, to
                          notify you if you win any contest; and to send you
                          promotional materials from its contest sponsors or
                          advertisers. We collect and store your search details
                          on the Website, including your search history, the
                          usage of the website and the features and time you
                          have used the website for. We collect any
                          communications between you and other users or third
                          parties through our Website and details of any
                          external links or advertisements that you click on.
                          Further, you may from time to time choose to provide
                          payment related financial information (credit card,
                          debit card, bank account details, billing address
                          etc.) on the Site. We are committed to keeping all
                          such sensitive data/information safe at all times and
                          ensure that such data/information is only transacted
                          over secure Site of approved payment gateways which
                          are digitally encrypted, and provide the highest
                          possible degree of care available under the technology
                          presently in use. The LLP will not use your financial
                          information for any purpose other than to complete a
                          transaction with you. To the extent possible, we
                          provide you the option of not divulging any specific
                          information that you wish for us not to collect, store
                          or use. You may also choose not to use a particular
                          service or feature on the Site, and opt out of any
                          non-essential communications from the LLP. Further,
                          transacting over the internet has inherent risks which
                          can only be avoided by you following security
                          practices yourself, such as not revealing
                          account/login related information to any other person
                          and informing our customer care team about any
                          suspicious activity or where your account has/may have
                          been compromised.
                        </p>
                      </div>

                      <h5>HOW INFORMATION IS COLLECTED</h5>
                      <div className="content">
                        <ul>
                          <li>
                            Before or at the time of collecting personal
                            information, we will identify the purposes for which
                            information is being collected.
                          </li>
                          <li>
                            We will collect and use yourpersonal information
                            solely with the objective of fulfilling those
                            purposes specified by us and for other compatible
                            purposes, unless we obtain the consent of the
                            individual concerned or as required by law.
                          </li>
                          <li>
                            We will only retain personal information as long as
                            necessary for the fulfilment of those purposes.{' '}
                          </li>
                          <li>
                            We will collect personal information by lawful and
                            fair means and, where appropriate, with the
                            knowledge or consent of the individual concerned.{' '}
                          </li>
                          <li>
                            {' '}
                            Personal data should be relevant to the purposes for
                            which it is to be used, and, to the extent necessary
                            for those purposes, should be accurate, complete,
                            and up-to-date.
                          </li>
                        </ul>
                      </div>

                      <h5>COOKIES</h5>
                      <div className="content">
                        <ul>
                          <li>
                            We use data collection devices such as "cookies" on
                            certain pages of our Websites. "Cookies" are small
                            files sited on your hard drive that assist us in
                            providing customized services. We also offer certain
                            features that are only available through the use of
                            a "cookie". Cookies can also help us provide
                            information, which is targeted to your interests.
                            Cookies may be used to identify logged in or
                            registered users.{' '}
                          </li>
                          <li>
                            Third party vendors including www.google.com
                            (“Google”) may use cookies to serve ads based on
                            your visits to this Website. You may visit the
                            website of the third party and choose to opt out of
                            the use of cookies for interest-based advertising,
                            if the third party offers such an option. You may
                            choose to opt-out of the DoubleClick cookie that
                            Google and its partners use for interest-based
                            advertising by visiting Ads Settings.
                            (Alternatively, you can direct users to opt out of a
                            third-party vendor's use of cookies for interest
                            based advertising by visiting aboutads.info.){' '}
                          </li>
                          <li>
                            The website also has enabled the Google Analytics
                            Advertising, which allows Google to collect data
                            about users on our website, in addition to Google
                            advertising cookies and anonymous identifiers. You
                            may choose to opt out of this by downloading and
                            installing the Google Analytics opt-out add-on here{' '}
                            <a href="https://tools.google.com/dlpage/gaoptout/">
                              {' '}
                              https://tools.google.com/dlpage/gaoptout/.
                            </a>
                          </li>
                        </ul>
                      </div>

                      <h5>EXTERNAL LINKS ON WEBSITE</h5>
                      <div className="content">
                        <p>
                          The Website may include hyperlinks to other web sites
                          or content or resources. We have no control over any
                          websites or resources, which are provided by companies
                          or persons other than Us. You acknowledge and agree
                          that We are not responsible for the availability of
                          any such external sites or resources, and does not
                          endorse any advertising, services/products or other
                          materials on or available from such websites or
                          resources. You acknowledge and agree that We are not
                          liable for any loss or damage which may be incurred by
                          you as a result of the availability of those external
                          sites or resources, or as a result of any reliance
                          placed by you on the completeness, accuracy or
                          existence of any advertising, products or other
                          materials on, or available from, such websites or
                          resources.These third-party service providers and
                          Third-Party Sites may have their own privacy policies
                          governing the storage and retention of your personal
                          information that you may be subject to. We recommend
                          that when you enter a Third-Party Site, you review the
                          Third Party Site’s privacy policy as it relates to
                          safeguarding your personal information. We use
                          third-party advertising companies to serve ads when
                          you visit the Website.
                        </p>
                      </div>

                      <h5>OUR USE OF YOUR INFORMATION</h5>
                      <div className="content">
                        <p>
                          Your contact information is used to contact you when
                          necessary. We use your IP address to help diagnose
                          problems with our server, and to administer our
                          Website. Your IP address is also used to help identify
                          you and to gather broad demographic information.
                          Finally, we may use your IP address to help protect
                          our partners and ourselves from fraud. We will
                          continue to enhance our security procedures as new
                          technology becomes available.We will transfer
                          information about you if We are acquired by or merged
                          with another company. In this event, we will notify
                          you by email or by putting a prominent notice on the
                          site before information about you is transferred and
                          becomes subject to a different privacy policy. We may
                          release your personal information to a third-party in
                          order to comply with a Court Order or other similar
                          legal procedure, or when we believe in good faith that
                          such disclosure is necessary to comply with the law;
                          prevent imminent physical harm or financial loss; or
                          investigate or take action regarding illegal
                          activities, suspected fraud, or violations of Our
                          Terms of Use. We may disclose personally identifiable
                          information to parties in compliance with our
                          Copyright Policy as mentioned in the Terms of Use as
                          we in our sole discretion believe necessary or
                          appropriate in connection with an investigation of
                          fraud, intellectual property infringement, piracy, or
                          other unlawful activity. In such events, We may
                          disclose name, address, country, phone number, email
                          address and company name.
                        </p>
                      </div>

                      <h5>CONFIDENTIALITY</h5>
                      <div className="content">
                        <p>
                          You further acknowledge that the Website may contain
                          information which is designated confidential by Us and
                          that you shall not disclose such information without
                          our prior written consent. Your information is
                          regarded as confidential and therefore will not be
                          divulged to any third party, unless if legally
                          required to do so to the appropriate authorities. We
                          will not sell, share, or rent your personal
                          information to any third party or use your e-mail
                          address for unsolicited mail. Any emails sent by us
                          will only be in connection with the provision of
                          agreed services.
                        </p>
                      </div>

                      <h5>OUR DISCLOSURE OF YOUR INFORMATION</h5>
                      <div className="content">
                        <p>
                          Due to the existing regulatory environment, we cannot
                          ensure that all of your private communications and
                          other personally identifiable information will never
                          be disclosed in ways not otherwise described in this
                          Privacy Policy. By way of example (without limiting
                          and foregoing), we may be forced to disclose
                          information to the government, law enforcement
                          agencies or third parties. Under certain
                          circumstances, third parties may unlawfully intercept
                          or access transmissions or private communications, or
                          members may abuse or misuse your information that they
                          collect from our Website. Therefore, although we use
                          industry standard practices to protect your privacy,
                          we do not promise, and you should not expect, that
                          your personally identifiable information or private
                          communications would always remain private. As a
                          matter of policy, we do not sell or rent any
                          personally identifiable information about you to any
                          third party. However, the following describes some of
                          the ways that your personally identifiable information
                          may be disclosed: a. External Service Providers: There
                          may be a number of services offered by external
                          service providers that help you use our Websites. If
                          you choose to use these optional services, and in the
                          course of doing so, disclose information to the
                          external service providers, and/or grant them
                          permission to collect information about you, then
                          their use of your information is governed by their
                          private policy. b. Other Corporate Entities: We share
                          much of our data, including personally identifiable
                          information about you, with our parent and/or
                          subsidiaries that are committed to serving your online
                          needs and related services, throughout the world. Such
                          data will be shared for the sole purpose of enhancing
                          your browsing experience and providing our services to
                          you. To the extent that these entities have access to
                          your information, they will treat it at least as
                          protectively as they treat information they obtain
                          from their other members. It is possible that We
                          and/or its subsidiaries, or any combination of such,
                          could merge with or be acquired by another business
                          entity. Should such a combination occur, you should
                          expect that we would share some or all of your
                          information in order to continue to provide the
                          service. You will receive notice of such event (to the
                          extent that it occurs). c. Law and Order: We
                          co-operate with law enforcement inquiries, as well as
                          other third parties to enforce laws, such as:
                          intellectual property rights, fraud and other rights.
                          We can (and you authorize us to) disclose any
                          information about you to law enforcement and other
                          government officials as we, in our sole discretion,
                          believe necessary or appropriate, in connection with
                          an investigation of fraud, intellectual property
                          infringements, or other activity that is illegal or
                          may expose us or you to legal liability.
                        </p>
                      </div>

                      <h5>ACCESSING AND REVIEWING INFORMATION</h5>
                      <div className="content">
                        <p>
                          Following registration, you can review and change the
                          information you submittedusername. If you change any
                          information we may or may not keep track of your old
                          information. You can change your registration
                          information such as: name, phone number, and other
                          profile information. We will retain in our files
                          information you have requested to remove for certain
                          circumstances, such as to resolve disputes,
                          troubleshoot problems and enforce our terms and
                          conditions. Further, such prior information is never
                          completely removed from our databases due to technical
                          and legal constraints, including stored 'back up'
                          systems. Therefore, you should not expect that all of
                          your personally identifiable information will be
                          completely removed from our databases in response to
                          your requests.
                        </p>
                      </div>

                      <h5>CONTROL OF YOUR PASSWORD</h5>
                      <div className="content">
                        <p>
                          When you sign up to become a Member, you will also be
                          asked to choose a password. You are entirely
                          responsible for maintaining the confidentiality of
                          your password. It is important that you protect it
                          against unauthorized access of your account and
                          information by choosing your password carefully, and
                          keeping your password and computer secure by signing
                          out after using our services. You agree not to use the
                          account, username, email address or password of
                          another Member at any time or to disclose your
                          password to any third party. If you choose to share
                          this information with third parties to provide you
                          additional services, you are responsible for all
                          actions taken with your login information and password
                          and therefore should review each third party's privacy
                          policy. You are responsible for all actions taken with
                          your login information and password, including fees.
                          If you lose control of your password, you may lose
                          substantial control over your personally identifiable
                          information and may be subject to legally binding
                          actions taken on your behalf. Therefore, if your
                          password has been compromised for any reason, you
                          should immediately change your password. You agree to
                          notify us immediately if you suspect any consistent
                          unauthorized use of your account or access to your
                          password even after changing it.
                        </p>
                      </div>

                      <h5>OTHER INFORMATION COLLECTORS</h5>
                      <div className="content">
                        <p>
                          Except as otherwise expressly included in this Privacy
                          Policy, this document only addresses the use and
                          disclosure of information we collect from you. To the
                          extent that you disclose your information to other
                          parties, whether they are on our Websites or on other
                          sites throughout the Internet, different rules may
                          apply to their use or disclosure of the information
                          you disclose to them. To the extent that we use third
                          party advertisers, they adhere to their own privacy
                          policies. Since we do not control the privacy policies
                          of the third parties, you are subject to ask questions
                          before you disclose your personal information to
                          others.
                        </p>
                      </div>

                      <h5>SECURITY</h5>
                      <div className="content">
                        <p>
                          We treat data as an asset that must be protected
                          against loss and unauthorized access. We employ many
                          different security techniques to protect such data
                          from unauthorized access by members inside and outside
                          the company.We do not recommend transfer of sensitive
                          information (such as credit card number) and bank
                          account details via the Site to other Users. Users are
                          recommended to do so offline, on the phone or via
                          personal emails. We follow generally accepted industry
                          standards to protect the personal information
                          submitted to us, both during transmission and once
                          Wereceive it. However, "perfect security" does not
                          exist on the Internet. You therefore agree that any
                          security breaches beyond the control of our standard
                          security procedures are at your sole risk and
                          discretion.
                        </p>
                      </div>

                      <h5>DISCLAIMER</h5>
                      <div className="content">
                        <p>
                          We cannot ensure that all of your private
                          communications and other personal information
                          (including sensitive information like credit card
                          information and bank account number) will never be
                          disclosed in ways not otherwise described in this
                          Privacy Policy. Therefore, although we are committed
                          to protecting your privacy, we do not promise, and you
                          should not expect, that your personal information will
                          always remain private. As a user of the Site, you
                          understand and agree that you assume all
                          responsibility and risk for your use of the Site, the
                          internet generally, and the documents you post or
                          access and for your conduct on and off the Site.
                        </p>
                      </div>

                      <h5>QUESTIONS AND SUGGESTIONS</h5>
                      <div className="content">
                        <p>
                          If you have any questions or concerns regarding this
                          privacy policy, you should contact us by sending an
                          email to{' '}
                          <a href="mailto:support@findcreative.in">
                            support@findcreative.in
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer
            activeSlide={this.state.currentSlide}
            direction={this.state.currentDirection}
            footerBgColor={this.state.footerBgColor}
            toggleHeader={this.state.toggleHeader}
            footerActive={this.state.footerActive}
            fullpageAnimation={this.state.fullpageAnimation}
            ref={this.footerWrapper}
            onScroll={this.handleScroll}
          ></Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default Policy;
