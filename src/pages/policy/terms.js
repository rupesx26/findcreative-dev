import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import './policy.scss';
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import {
  TimelineMax,
  TimelineLite,
  TweenMax,
  Power2,
  Linear,
  Power4
} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { differImagePath } from '../../utils/assetUtils';

class Terms extends Component {
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
                  <div className="col-md-10 col-offset-md-2">
                    <div className="col-md-10">
                      <h1>Terms</h1>

                      <h5>GENERAL</h5>
                      <div className="content">
                        <p>
                          "www.findcreative.in" (hereinafter, the "Website") is
                          owned and operated by FindCreative, a Limited
                          Liability Partnership incorporated under the Limited
                          Liability Partnership Act, 2008, having its registered
                          address at ___________________________Mumbai, India
                          (hereinafter referred to as the “LLP”) You are advised
                          to read and understand these Terms carefully as moving
                          past the home page, or using any of the services shall
                          be taken to mean that You have read and agreed to all
                          of the policies, which constitute a legally binding
                          agreement between you and the website. These terms are
                          to be read along with the Privacy Policy and any other
                          policies on the website. In terms of Information
                          Technology statutes, this document is an electronic
                          record,under the laws of India. This document is
                          published in accordance with the provisions of Rule 3
                          (1) of the Information Technology (Intermediaries
                          guidelines) Rules, 2011 that require publishing the
                          rules and regulations, privacy policy and Terms of Use
                          for access or usage of the Website. For the purpose of
                          these Terms of Use, along with any amendments to the
                          same, and wherever the context so requires "You" shall
                          mean any natural or legal person who has agreed to
                          become a user of the Website by accessing the Website,
                          the term “Creative Professional” shall mean a
                          professional hired for his creative skills, the term
                          “User” shall mean any person who intends to hire any
                          Creative Professional for a particular service.The
                          Website also provides certain services without
                          registration/acceptance, and such provision of
                          services does not absolve You of this contractual
                          relationship. The term "We", "Us", "Our" shall mean
                          the LLP. “Agreement” shall mean and refer to this
                          Terms of Service, including any amendments that may be
                          incorporated into it. “Services” shall mean and refer
                          to the services offered by the LLP to the Users,
                          including but not limited toan online market place
                          connecting Users with Creative Professionals.“Third
                          Party” shall mean and refer to any individual(s),
                          company or entity apart from the User and the LLP. The
                          headings of each section in this Agreement are only
                          for the purpose of organising the various provisions
                          under this Agreement in an orderly manner. These
                          headings shall not be used by either party to
                          interpret the provisions contained under them in any
                          manner. Further, the headings have no legal or
                          contractual value. By using theWebsite, You accept and
                          agree to be bound by this Agreement, the Privacy
                          Policy, as well as rules, guidelines, policies, terms,
                          and conditions applicable to any service that is
                          provided by this Website, that shall be deemed to be
                          incorporated into this Terms of Use and shall be
                          considered as part and parcel of this Terms of Use.
                          Your use of Our Website is evidence that You have read
                          and agreed to be contractually bound by these Terms of
                          Service and our Privacy Policy. Please read both
                          carefully. The use of this Website by You is governed
                          by this policy and any policy so mentioned by terms of
                          reference.If You do not agree with any of these terms,
                          please discontinue using the Website. We hold the sole
                          right to modify the Terms of Service without prior
                          permission from You or providing notice to You. The
                          relationship creates on You a duty to periodically
                          check the Terms of Service and stay updated on its
                          requirements. If You continue to use the Website or
                          avail any of its services without registration
                          following such change, this is deemed as consent by
                          You to the so amended policies. Your continued use of
                          the Website is conditioned upon Your compliance with
                          the Terms of Service, including but not limited to
                          compliance with the Terms of Service even after
                          alterations, if any.
                        </p>
                      </div>

                      <h5>SERVICES OVERVIEW</h5>
                      <div className="content">
                        <p>
                          The Website is an online market place that enables
                          Users and Creative Professionals around India to
                          collaborate for mutual benefits (hereinafter referred
                          to as “Services”). Users in need of skilled and
                          Creative Professionals for short term or long term
                          purpose can get in touch with such professionals. The
                          Website acts as intermediary between the Users and the
                          Creative Professionals, it does not represent any User
                          or Creative Professional. As a result, the Website is
                          not responsible for the quality, safety, lawfulness or
                          availability of any service offered on the Website or
                          the ability of the Creative Professionals to complete
                          any service. The Website provides business to business
                          services to the Creative Professionals and the Users
                          along with the following scope of services: a) Scope
                          of services provided to Creative Professionals: The
                          Website allows the Creative Professional to upload and
                          display their work in the form of images, audio, video
                          (via embedded links). The Website allows a Creative
                          Professional to upload up to 5 projects free of cost,
                          after which he would be required to upgrade his
                          membership with the Website upon paying a fee. Through
                          the Website, the Creative Professional can track the
                          number of people who have viewed his profile and also
                          connect with other Creative Professionals by getting
                          in touch with the Website. The Website creates a
                          dashboard for every User and Creative Professional to
                          help him track all his past, ongoing and future
                          projects. Only upon upgrade will the Website allow a
                          Creative Professional to mark his calendar to help a
                          User plan his project better. The Website allows the
                          Creative Professionals to recommend other Creative
                          Professionals and vice versa. The Website gives a
                          special “FC Recommendation” to a Creative Professional
                          based on performance, reviews and interaction with
                          Users.
                        </p>
                        <p>
                          Scope of services provided to a User: The Website
                          allows the Users to search and shortlist a Creative
                          Professional of their choice and interest after
                          reading other User reviews and recommendations. A User
                          can do so by looking at the portfolio uploaded by the
                          Creative Professionals on the Website. Once the User
                          has selected the Creative Professional of his choice,
                          he can directly approach them through the FC
                          Messenger. The Website allows the User to create their
                          own team of professionals based on their requirement
                          and budget. Once the User has created their team, the
                          Website sends out a common brief to the team of
                          Creative Professionals. Interested Creative
                          Professionals may respond to the User if they wish to
                          participate in the project. The Website will allow
                          Users to write reviews and recommendations about the
                          Creative Professionals they hire, as well as bookmark
                          their favourite Creative Professionals for future
                          reference.
                        </p>
                      </div>

                      <h5>MEMBERSHIP</h5>
                      <div className="content">
                        <p>
                          Registration on the Website is mandatory to avail the
                          information and services. A non registered User will
                          be not be able to access any Website content, apart
                          from the homepage. Basic information like name,
                          username, password, mobile number, address would be
                          collected from the User at the time of registration.
                          The Email ID provided during registration can be of
                          any Email service provider including but not limited
                          to Gmail, and Yahoo mail. You must keep your account
                          and registration details current and correct. The
                          Website also uses Facebook and Google+ platforms as a
                          medium for signing up. The User data collected by the
                          Website shall only be through the above mediums which
                          will be provided by the intended User through their
                          Facebook or Google+ profile, no other data shall be
                          collected or used by the Website apart from those
                          furnished during Sign Up process. However, kindly note
                          that the manner in which Facebook and Google+ uses,
                          stores and discloses your information is governed
                          solely by its policies, and the Website bears no
                          liabilities/responsibility for its privacy practices
                          and/or other actions of any third party site or
                          service that may be enabled within the Service.
                          Membership of this website is available only to those
                          above the age of 18 years.Barring those “Incompetent
                          to Contract” which inter alia include insolvents. If
                          You are a minor and wish to use the Website, You may
                          do so through Your legal guardian and Us.We reserve
                          the right to terminate Your account on knowledge of
                          You being a minor and having registered on the Website
                          or availing any of its services. All information
                          provided by the Users is self-declared and not
                          verified by the LLP. The LLP has the right to use any
                          and all information provided by the User for
                          promotions or marketing purposes. Further, at any time
                          during Your use of this Website, including but not
                          limited to the time of registration, You are solely
                          responsible for protecting the confidentiality of Your
                          username and password, and any activity under the
                          account shall be deemed to have been done by You. In
                          the case that You provide Us with false and/or
                          inaccurate details or We have reason to believe You
                          have done so, We hold the right to permanently suspend
                          Your account.
                        </p>
                      </div>

                      <h5>TERM/TERMINATION</h5>
                      <div className="content">
                        <p>
                          These Terms shall continue to form a valid and binding
                          contract between the Parties, and shall continue to be
                          in full force and effect as long as the User continues
                          to access and use the Website. You may terminate Your
                          use of the Service at any time by ceasing to use the
                          Service.We may terminate these Terms and close Your
                          account at any time without notice, if we cease to
                          provide the Services. We may suspend or terminate Your
                          use of and access to the Website at any time and for
                          any reason, in our sole discretion. Such suspension or
                          termination shall not limit our right to take any
                          other action against You that we consider appropriate.
                        </p>
                      </div>

                      <h5>SECURITY</h5>
                      <div className="content">
                        <p>
                          Transactions on the Website are secure and protected.
                          Any information entered by the User when transacting
                          on the Website is encrypted to protect the User
                          against unintentional disclosure to third parties. The
                          User’s credit and debit card information is not
                          received, stored by or retained by the LLP / Website
                          in any manner.
                        </p>
                      </div>

                      <h5>PRICING</h5>
                      <div className="content">
                        <p>
                          The membership of this Website is free and this only
                          includes the browsing of the site. The Website charges
                          a fee from the Creative Professional to upgrade their
                          account in order to be able to upload more than 5
                          projects. However, We reserve the right to amend the
                          charges for the services rendered. In such a case,
                          Users will be intimated of the same, and it will be up
                          to you to decide whether or not you will continue with
                          services offered by us. Such changes are effective as
                          soon as they are posted on the Website.
                        </p>
                      </div>

                      <h5>COMMUNICATIONS AND ADVERTISEMENTS</h5>
                      <div className="content">
                        <p>
                          By using this Website, it is deemed that You have
                          consented to receiving telephonic calls, SMSes and/or
                          emails from Us at any time we deem fit. We shall reach
                          out to communicate with You and enhance Your
                          experience while using the Website. From time to time,
                          the LLP may display server advertisements within the
                          Website and also during the use of the Website. These
                          advertisements shall also inform You about the new
                          products and services released by us. These
                          communications include, but are not limited to
                          contacting You through information received from Third
                          Parties. Such communications by Us is for purposes
                          that inter alia include clarification calls, marketing
                          calls and promotional calls. These communications
                          shall be sent to You on the telephone number and/or
                          email address provided by You for the use of this
                          Website which are subject to our Privacy Policy. In
                          case You wish to stop receiving notifications from Us
                          with regard to marketing and promotional calls,and any
                          communication from Us, You are required to send an
                          email to support@findcreative.in. The LLP holds the
                          right to all content published on the Website, as well
                          as its distribution, dissemination and republishing
                          for promotional purposes. You may also be contacted by
                          Service Providers with whom We have entered into a
                          contract in furtherance of our rights, duties and
                          obligations under this document and other policies
                          followed by Us and with whom You have become friends
                          via the website. Such contact shall be made only in
                          pursuance of such objectives, and no other calls shall
                          be made. In addition, You may also be contacted by
                          Third Parties who may have access to the information
                          disclosed by You or to whom We may have disclosed Your
                          information for purposes such as, but not limited to,
                          statistical compilations.The sharing of the
                          information provided by You shall be governed by our
                          Privacy Policy.
                        </p>
                      </div>

                      <h5>RELATIONSHIP</h5>
                      <div className="content">
                        <p>
                          The engagement, contract or hiring for service are
                          between the User and the Creative Professional. Upon
                          acceptance of a quote, the User agrees to pay for the
                          services and the Creative Professional agrees to
                          provide the service and relative deliverables in
                          accordance with the agreement with the User and the
                          Creative Professional, this Agreement, and any other
                          policy of this Website. The Creative Professional is
                          solely responsible for the performance, quality of the
                          product/services and to complete the task in a timely
                          manner as required by the User. The User and the
                          Creative Professional each agree to act in good faith
                          and fair dealing.
                        </p>
                        <p>
                          The Creative Professional and the User agree that the
                          relationship of the Creative Professional is that of
                          an independent contractor. The Creative Professional
                          shall perform the service as an independent contractor
                          and nothing in this Agreement shall be deemed to
                          create a partnership or joint venture or any other
                          kind of relationship between the User and the Creative
                          Professional.
                        </p>
                      </div>

                      <h5>OBLIGATIONS</h5>
                      <div className="content">
                        <p>You are a restricted user of this Website.</p>
                        <ul>
                          <li>
                            You are bound not to cut, copy, distribute, modify,
                            recreate, reverse engineer, distribute, disseminate,
                            post, publish or create derivative works from,
                            transfer, or sell any information or software
                            obtained from the Website. With our prior
                            permission, limited use may be allowed. For the
                            removal of doubt, it is clarified that unlimited or
                            wholesale reproduction, copying of the content for
                            commercial or non-commercial purposes and
                            unwarranted modification of data and information
                            within the content of the Website is not permitted.
                          </li>
                          <li>
                            You agree not to access (or attempt to access) the
                            Website or Services by any means other than through
                            the interface that is provided by the Website. The
                            use of deep-link, robot, spider or other automatic
                            device, program, algorithm or methodology, or any
                            similar or equivalent manual process, to access,
                            acquire, copy or monitor any portion of the Website
                            or Content, or in any way reproduce or circumvent
                            the navigational structure or presentation of the
                            Website, materials or any Content, to obtain or
                            attempt to obtain any materials, documents or
                            information through any means not specifically made
                            available through the Website. You acknowledge and
                            agree that accessing or using the Website or
                            Services may expose you exposed to content from
                            other users that You may consider offensive,
                            indecent or otherwise objectionable. We disclaim all
                            liabilities arising in relation to such offensive
                            content on the Website. Further, You may report such
                            offensive content.
                          </li>
                          <li>
                            In places where this Website allows you to post or
                            upload data/information, you undertake to ensure
                            that such material is not offensive and in
                            accordance with applicable laws. Further, you
                            undertake not to:
                            <ul>
                              <li>
                                Abuse, harass, threaten, defame, disillusion,
                                erode, abrogate, demean or otherwise violate the
                                legal rights of others;
                              </li>
                              <li>
                                Engage in any activity that interferes with or
                                disrupts access to the Website or the Services
                                (or the servers and networks which are connected
                                to the Website);
                              </li>
                              <li>
                                Impersonate any person or entity, or falsely
                                state or otherwise misrepresent your affiliation
                                with a person or entity;
                              </li>
                              <li>
                                Publish, post, disseminate, any information
                                which is grossly harmful, harassing,
                                blasphemous, defamatory, obscene, pornographic,
                                pedophilic, libelous, invasive of another's
                                privacy, hateful, or racially, ethnically
                                objectionable, disparaging, relating or
                                encouraging money laundering or gambling, or
                                otherwise unlawful in any manner whatsoever; or
                                unlawfully threatening or unlawfully harassing
                                including but not limited to "indecent
                                representation of women" under the relevant laws
                                of the India.
                              </li>
                              <li>
                                Post any file that infringes the copyright,
                                patent or trademark of other legal entities;
                              </li>
                              <li>
                                Upload or distribute files that contain viruses,
                                corrupted files, or any other similar software
                                or programs that may damage the operation of the
                                Website or another's computer;
                              </li>
                              <li>
                                Download any file posted by another user that
                                you know, or reasonably should know, cannot be
                                legally distributed in such manner;
                              </li>
                              <li>
                                Probe, scan or test the vulnerability of the
                                Website or any network connected to the Website,
                                nor breach the security or authentication
                                measures on the Website or any network connected
                                to the Website. You may not reverse look-up,
                                trace or seek to trace any information on any
                                other user, of or visitor to, the Website, or
                                any other customer of the Website, including any
                                website Account not owned by You, to its source,
                                or exploit the Website or Service or information
                                made available or offered by or through the
                                Website, in any way whether or not the purpose
                                is to reveal any information, including but not
                                limited to personal identification information,
                                other than Your own information, as provided for
                                by the Website;
                              </li>
                              <li>
                                Disrupt or interfere with the security of, or
                                otherwise cause harm to, the Website, system
                                resources, accounts, passwords, servers or
                                networks connected to or accessible through the
                                Website or any affiliated or linked sites;
                              </li>
                              <li>
                                {' '}
                                Collect or store data about other users in
                                connection with the prohibited conduct and
                                activities set forth in this Section;
                              </li>
                              <li>
                                Use the Website or any material or Content for
                                any purpose that is unlawful or prohibited by
                                these Terms of Service, or to solicit the
                                performance of any illegal activity or other
                                activity which infringes the rights of this
                                Website or other third parties;
                              </li>
                              <li>
                                Violate any code of conduct or other guidelines,
                                which may be applicable for or to any particular
                                Service;
                              </li>
                              <li>
                                Violate any applicable laws or regulations for
                                the time being in force within or outside INDIA;
                              </li>
                              <li>
                                Violate the Terms of Service including but not
                                limited to any applicable Additional Terms of
                                the Website contained herein or elsewhere;
                              </li>
                              <li>
                                Violate any code of conduct or other guidelines,
                                which may be applicable for or to any particular
                                Service;
                              </li>
                              <li>
                                {' '}
                                Threaten the unity, integrity, defense, security
                                or sovereignty of INDIA or any other country,
                                friendly relations with foreign states, or
                                public order or cause incitement to the
                                commission of any cognizable offence or prevent
                                investigation of any offence or is insulting any
                                other nation;
                              </li>
                              <li>
                                {' '}
                                Publish, post, disseminate information that is
                                false, inaccurate or misleading; violate any
                                applicable laws or regulations for the time
                                being in force in or outside INDIA;
                              </li>
                              <li>
                                Directly or indirectly, offer, attempt to offer,
                                trade or attempt to trade in any item, the
                                dealing of which is prohibited or restricted in
                                any manner under the provisions of any
                                applicable law, rule, regulation or guideline
                                for the time being in force;
                              </li>
                              <li>
                                {' '}
                                Create liability for us or cause us to lose (in
                                whole or in part) the services of our internet
                                service provider ("ISPs") or other suppliers.
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p>
                          You shall not engage in advertising to, or in
                          solicitation of, other Users of the Website to buy or
                          sell any products or services, including, but not
                          limited to, products or services related to that being
                          displayed on the Website or related to us. You may not
                          transmit any chain letters or unsolicited commercial
                          or junk email to other Users via the Website. It shall
                          be a violation of these Terms of Service to use any
                          information obtained from the Website in order to
                          harass, abuse, or harm another person, or in order to
                          contact, advertise to, solicit, or sell to another
                          person other than Us without Our prior explicit
                          consent. We can (and You hereby expressly authorize Us
                          to) disclose any information about You to law
                          enforcement or other government officials, as we, in
                          our sole discretion, believe it necessary or
                          appropriate in connection with the investigation
                          and/or resolution of possible crimes, especially those
                          that may involve personal injury. In order to protect
                          Our Users from such advertising or solicitation, we
                          reserve the right to restrict the number of messages
                          or emails a User may send to other Users in any
                          24-hour period which We deem appropriate in our sole
                          discretion. You understand that We have the right at
                          all times to disclose any information (including the
                          identity of the persons providing information or
                          materials on the Website) as necessary to satisfy any
                          law, regulation or valid governmental request. This
                          may include, without limitation, disclosure of the
                          information in connection with investigation of
                          alleged illegal activity or solicitation of illegal
                          activity or in response to a lawful court order or
                          subpoena. We have no obligation to monitor the
                          materials posted on the Website. We shall have the
                          right to remove or edit any content that in its sole
                          discretion violates, or is alleged to violate, any
                          applicable law or either the spirit or letter of these
                          Terms of Service. Notwithstanding this right, YOU
                          REMAIN SOLELY RESPONSIBLE FOR THE CONTENT OF THE
                          MATERIALS YOU POST ON THE WEBSITE AND IN YOUR PRIVATE
                          MESSAGES. In no event shall we assume or have any
                          responsibility or liability for any Content posted or
                          for any claims, damages or losses resulting from the
                          use of Content and/or appearance of Content on the
                          Website. You hereby represent and warrant that you
                          have all necessary rights in and to all content which
                          You provide and all information it contains and that
                          such Content shall not infringe any proprietary or
                          other rights of third parties or contain any libelous,
                          tortuous, or otherwise unlawful information.
                        </p>
                      </div>

                      <h5>DISCLAIMERS REGARDING SERVICES</h5>
                      <div className="content">
                        <p>
                          The LLP accepts no liability for any errors or
                          omissions, whether on behalf of itself or third
                          parties. You acknowledge that the LLP has no
                          relationship with you other than providing you with
                          this service. At no time shall the LLP have any right,
                          title or interest in any bookings done by you. The LLP
                          does not have any control over the quality, failure to
                          provide or any other aspect whatsoever of the booked
                          service and is not responsible for damages or delays.
                        </p>
                        <p>
                          The Website or the LLP shall not be held liable for
                          any delay/default/failure to provide service/improper
                          or inefficient service provided by the Creative
                          Professionals.The Website is just an intermediary and
                          cannot be held responsible for any act of the Creative
                          Professional or the User. Any complaints of the
                          services of the Creative Professional are to be made
                          directly to the Creative Professional providing such
                          services.
                        </p>
                      </div>

                      <h5>REVIEWS, FEEDBACK AND SUBMISSIONS</h5>
                      <div className="content">
                        <p>
                          All reviews, comments, feedback, suggestions, ideas,
                          and other submissions disclosed, submitted or offered
                          on the Site or otherwise disclosed, submitted or
                          offered in connection with use of the Site
                          (collectively, the Comments) shall be and remain the
                          property of the LLP. Such disclosure, submission or
                          offer of any Comments shall constitute an assignment
                          to the LLP of all worldwide rights, titles and
                          interests in all copyrights and other intellectual
                          properties in the Comments. Thus, the LLP shall
                          exclusively own all such rights, titles and interests
                          in the Comments and shall not be limited in any way in
                          its use, commercial or otherwise. The LLP will be
                          entitled to use, reproduce, disclose, modify, adapt,
                          create derivative works from any Comments, and
                          publish, display and distribute any Comments submitted
                          for any purpose whatsoever without restriction and
                          without compensating the user in any way. The LLP is
                          and shall be under no obligation to: (i) maintain any
                          Comments in confidence; or (ii) pay compensation for
                          any Comments; or (iii) respond to any Comments. You
                          agree that any Comments submitted by you on the Site
                          will not violate the Terms of Use or any right of any
                          third party, including copyright, trademark, privacy
                          or other personal or proprietary right(s), and will
                          not cause injury to any person or entity. You further
                          agree that no Comments submitted by you on the Site
                          will be or contain libelous or otherwise unlawful,
                          threatening, abusive or obscene material, or contain
                          software viruses, political campaigning, commercial
                          solicitation, chain letters, mass mails or any form of
                          ‘spam’. The LLP does reserve the right (but assumes no
                          obligation) to monitor, edit and/or remove any
                          Comments submitted on the Site. You hereby grant the
                          LLP the right to use names that you submit in
                          connection with any Comments. You agree not to use a
                          false email address, impersonate any person or entity,
                          or otherwise mislead as to the origin of any Comments
                          you submit. You are, and shall remain, responsible for
                          the content of any Comments you make and you agree to
                          indemnify the LLP and its affiliates against all
                          claims, loss and liabilities resulting from any
                          Comments you submit. Further, any reliance placed on
                          Comments available on the Site from a third party
                          shall be at your sole risk and expense.
                        </p>
                      </div>

                      <h5>INTELLECTUAL PROPERTY RIGHTS</h5>
                      <div className="content">
                        <p>
                          All information, content, services and software
                          displayed on, transmitted through, or used in
                          connection with the Website, (hereinafter referred to
                          as the "Content"), as well as its selection and
                          arrangement, is owned by Us. You may use the Content
                          only through the Website, and solely for Your
                          personal, non-commercial use. You may not, republish
                          any portion of the Content on any Internet, Intranet
                          or extranet site or incorporate the Content in any
                          database, compilation, archive or cache. You may not
                          distribute any Content to others, whether or not for
                          payment or other consideration, and You may not modify
                          copy, frame, cache, reproduce, sell, publish,
                          transmit, display or otherwise use any portion of the
                          Content. You may not scrape or otherwise copy our
                          Content without permission. You agree not to
                          decompile, reverse engineer or disassemble any
                          software or other products or processes accessible
                          through the Website, not to insert any code or product
                          or manipulate the content of the Website in any way
                          that affects the user's experience, and not to use any
                          data mining, data gathering or extraction method.
                        </p>
                      </div>

                      <h5>GEOGRAPHICAL EXTENT</h5>
                      <div className="content">
                        <p>
                          TheWebsite can be used in all countries worldwide. We
                          make no representation that the content available
                          through our Website is appropriate or available for
                          all countries.If You access or use the Websitein
                          countries where the Website is prohibited, You are
                          solely responsible for compliance with necessary laws
                          and regulations for use of the Website.
                        </p>
                      </div>

                      <h5>DISCLAIMERS OF WARRANTIES AND LIABILITIES</h5>
                      <div className="content">
                        <p>
                          YOU EXPRESSLY UNDERSTAND AND AGREE THAT, TO THE
                          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: THE
                          WEBSITE, SERVICES AND OTHER MATERIALS ARE PROVIDED BY
                          THIS WEBSITE IS ON AN "AS IS" BASIS WITHOUT WARRANTY
                          OF ANY KIND, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE,
                          INCLUDING THE IMPLIED WARRANTIES OF TITLE,
                          NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A
                          PARTICULAR PURPOSE. WITHOUT LIMITING THE FOREGOING,
                          WEBSITE MAKES NO WARRANTY THAT
                        </p>
                        <ul>
                          <li>
                            {' '}
                            YOUR REQUIREMENTS WILL BE MET OR THAT SERVICES
                            PROVIDED WILL BE UNINTERRUPTED, TIMELY, SECURE OR
                            ERROR-FREE;
                          </li>
                          <li>
                            {' '}
                            MATERIALS, INFORMATION AND RESULTS OBTAINED WILL BE
                            EFFECTIVE, ACCURATE OR RELIABLE;
                          </li>
                          <li>
                            ANY ERRORS OR DEFECTS IN THE WEBSITE, SERVICES OR
                            OTHER MATERIALS WILL BE CORRECTED.
                          </li>
                        </ul>
                        <p>
                          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE
                          WILL HAVE NO LIABILITY RELATED TO USER CONTENT ARISING
                          UNDER INTELLECTUAL PROPERTY RIGHTS, LIBEL, PRIVACY,
                          PUBLICITY, OBSCENITY OR OTHER LAWS. WEBSITE ALSO
                          DISCLAIMS ALL LIABILITY WITH RESPECT TO THE MISUSE,
                          LOSS, MODIFICATION OR UNAVAILABILITY OF ANY USER
                          CONTENT. THE USER UNDERSTANDS AND AGREES THAT ANY
                          MATERIAL OR DATA DOWNLOADED OR OTHERWISE OBTAINED
                          THROUGH THE WEBSITE IS DONE ENTIRELY AT HIS/HER OWN
                          DISCRETION AND RISK AND HE/SHE WILL BE SOLELY
                          RESPONSIBLE FOR ANY DAMAGE TO HIS/HER COMPUTER SYSTEMS
                          OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH
                          MATERIAL OR DATA. WE ARE NOT RESPONSIBLE FOR ANY
                          TYPOGRAPHICAL ERROR LEADING TO AN INVALID COUPON.
                          WEBSITE ACCEPTS NO LIABILITY FOR ANY ERRORS OR
                          OMISSIONS, WITH RESPECT TO ANY INFORMATION PROVIDED TO
                          YOU WHETHER ON BEHALF OF ITSELF OR THIRD PARTIES. WE
                          SHALL NOT BE LIABLE FOR ANY THIRD PARTY PRODUCT OR
                          SERVICES. THE ADVERTISEMENT AVAILABLE ON E-MAIL OR
                          WEBSITE WITH RESPECT TO THE THIRD PARTY WEBSITE OR THE
                          PRODUCTS AND SERVICES ARE FOR INFORMATION PURPOSE
                          ONLY.
                        </p>
                      </div>

                      <h5>INDEMNIFICATION AND LIMITATION OF LIABILITY</h5>
                      <div className="content">
                        <p>
                          YOU AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS THIS
                          WEBSITE/LLP INCLUDING BUT NOT LIMITED TO ITS AFFILIATE
                          VENDORS, AGENTS AND EMPLOYEES FROM AND AGAINST ANY AND
                          ALL LOSSES, LIABILITIES, CLAIMS, DAMAGES, DEMANDS,
                          COSTS AND EXPENSES (INCLUDING LEGAL FEES AND
                          DISBURSEMENTS IN CONNECTION THEREWITH AND INTEREST
                          CHARGEABLE THEREON) ASSERTED AGAINST OR INCURRED BY US
                          THAT ARISE OUT OF, RESULT FROM, OR MAY BE PAYABLE BY
                          VIRTUE OF, ANY BREACH OR NON-PERFORMANCE OF ANY
                          REPRESENTATION, WARRANTY, COVENANT OR AGREEMENT MADE
                          OR OBLIGATION TO BE PERFORMED BY YOU PURSUANT TO THESE
                          TERMS OF SERVICE. FURTHER, YOU AGREE TO HOLD US
                          HARMLESS AGAINST ANY CLAIMS MADE BY ANY THIRD PARTY
                          DUE TO, OR ARISING OUT OF, OR IN CONNECTION WITH, YOUR
                          USE OF THE WEBSITE, ANY CLAIM THAT YOUR MATERIAL
                          CAUSED DAMAGE TO A THIRD PARTY, YOUR VIOLATION OF THE
                          TERMS OF SERVICE, OR YOUR VIOLATION OF ANY RIGHTS OF
                          ANOTHER, INCLUDING ANY INTELLECTUAL PROPERTY RIGHTS.
                          IN NO EVENT SHALL THE WEBSITE, ITS OFFICERS,
                          DIRECTORS, EMPLOYEES, PARTNERS OR SUPPLIERS BE LIABLE
                          TO YOU, THE VENODOR OR THE USER OR ANY THIRD PARTY FOR
                          ANY SPECIAL, INCIDENTAL, INDIRECT, CONSEQUENTIAL OR
                          PUNITIVE DAMAGES WHATSOEVER, INCLUDING THOSE RESULTING
                          FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT
                          FORESEEABLE OR WHETHER OR NOT WE HAVE BEEN ADVISED OF
                          THE POSSIBILITY OF SUCH DAMAGES, OR BASED ON ANY
                          THEORY OF LIABILITY, INCLUDING BREACH OF CONTRACT OR
                          WARRANTY, NEGLIGENCE OR OTHER TORTIOUS ACTION, OR ANY
                          OTHER CLAIM ARISING OUT OF OR IN CONNECTION WITH YOUR
                          USE OF OR ACCESS TO THE WEBSITE, SERVICES OR
                          MATERIALS. THE LIMITATIONS AND EXCLUSIONS IN THIS
                          SECTION APPLY TO THE MAXIMUM EXTENT PERMITTED BY
                          APPLICABLE LAW.
                        </p>
                      </div>

                      <h5>DISPUTES ARISING OUT OF THIS AGREEMENT</h5>
                      <div className="content">
                        <p>
                          All disputes involving but not limited to rights
                          conferred, compensation, refunds, and other claims
                          will be resolved through a two-step Alternate Dispute
                          Resolution mechanism. Stage 1: Mediation. In case of a
                          dispute, the matter will first be attempted to be
                          resolved by a sole mediator who is a neutral third
                          party and will be selected at the mutual acceptance of
                          a proposed mediator by both parties. Both parties may
                          raise a name for the sole mediator and in the case
                          both parties accept the proposed name, the said person
                          shall be appointed as sole mediator. In case the
                          parties are not able to reach a consensus within two
                          proposed mediators, the sole proprietorship reserves
                          the right to decide who the final mediator is. The
                          decision of the mediator is not binding on both
                          parties. Stage 2: Arbitration. If the dispute is not
                          settled by mediation, it shall be referred to and
                          finally resolved by arbitration, which shall be
                          governed by the law, rules and regulations of Mumbai,
                          India. The Arbitral award is binding on both parties.
                          The Arbitration Board shall comprise three members –
                          one appointed by each party and the third member to be
                          nominated by the two appointed members by mutual
                          consent. Arbitration shall be held at Mumbai. The
                          proceedings of arbitration shall be in the English
                          language. The arbitrator’s award shall be final and
                          binding on the Parties. The exclusive jurisdiction and
                          venue for actions and disputes mentioned above shall
                          be the courts located in Mumbai, India and You hereby
                          submit to the personal jurisdiction of such courts
                        </p>
                      </div>

                      <h5>PRIVACY</h5>
                      <div className="content">
                        <p>
                          We encourage You to read the Privacy Policy and to use
                          the information it contains to make informed decisions
                          regarding Your personal information. Please also note
                          that certain information, statements, data and content
                          (such as but not limited to videos) which You provide
                          on the Website are likely to reveal Your gender,
                          ethnic origin, nationality, age, and/or other personal
                          information about You. You acknowledge and agree that
                          Your submission of such information is voluntary on
                          Your part. Further, You acknowledge, consent and agree
                          that we may access, preserve, and disclose information
                          You provide to Us at any stage during Your use of the
                          Website. Disclosures of information to Third Parties
                          are further addressed in Our Privacy Policy.
                        </p>
                      </div>

                      <h5>NOTICES</h5>
                      <div className="content">
                        <p>
                          Any and all communication relating to any dispute or
                          grievance experienced by the User may be communicated
                          to the LLP by the User reducing the same to writing,
                          and sending the same to the registered office of the
                          LLP by Registered Post, or the email address{' '}
                          <a href="mailto:support@findcreative.in">
                            support@findcreative.in
                          </a>
                        </p>
                      </div>

                      <h5>MISCELLANEOUS PROVISIONS</h5>
                      <div className="content">
                        <p>
                          Entire Agreement: This Agreement is the complete and
                          exclusive statement of the agreements between You and
                          Us with respect to the subject matter hereof and
                          supersedes all other communications or representations
                          or agreements (whether oral, written or otherwise)
                          relating thereto. Waiver: The failure of either party
                          at any time to require performance of any provision of
                          this Agreement in no manner shall affect such party's
                          right at a later time to enforce the same. No waiver
                          by either party of any breach of this Agreement,
                          whether by conduct or otherwise, in any one or more
                          instances, shall be deemed to be, or construed as, a
                          further or continuing waiver of any other such breach,
                          or a waiver of any other breach of this Agreement.
                          Liability: The Website, Mobile App and the LLPshall
                          not be liable in any way for User Content, including,
                          but not limited to, any errors or omissions contained
                          therein, or any loss or damage of any kind incurred as
                          a result of the use of any User Content posted,
                          emailed, transmitted or otherwise made available via
                          the Service or broadcast elsewhere. Severability: If
                          any provision of this Agreement shall to any extent be
                          held invalid, illegal or unenforceable, the validity,
                          legality and enforceability of the remaining
                          provisions of this Agreement shall in no way be
                          affected or impaired thereby and each such provision
                          of this Agreement shall be valid and enforceable to
                          the fullest extent permitted by law. In such a case,
                          this Agreement shall be reformed to the minimum extent
                          necessary to correct any invalidity, illegality or
                          unenforceability, while preserving to the maximum
                          extent the rights and commercial expectations of the
                          parties hereto, as expressed herein.
                        </p>
                      </div>

                      <h5>CONTACT US</h5>
                      <div className="content">
                        <p>
                          If you have any questions about this Agreement, the
                          practices of the Website, or your experience with the
                          Service, you can e-mail us at{' '}
                          <a href="mailto:support@findcreative.in">
                            support@findcreative.in
                          </a>{' '}
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

export default Terms;
