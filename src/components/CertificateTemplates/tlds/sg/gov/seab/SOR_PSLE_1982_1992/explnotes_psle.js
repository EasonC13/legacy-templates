import { get, groupBy } from "lodash";
import {
  EXPLANATORY_TITLE,
  EXPLANATORY_PAGE_SIZE,
  EXPLANATORY_SUB_TITLE,
  EXPLANATORY_FONT_SIZE_13,
  EXPLANATORY_CONTENT,
  EXPLANATORY_MARGIN
} from "../common";

export const renderExplonataryNotes = ({ certificate }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="row">
        <div className="col-xs-11" valign="top" style={EXPLANATORY_CONTENT}>
          The Singapore Examinations and Assessment Board is authorised by the
          Republic of Singapore to manage national examinations in Singapore.
          The Board and the Ministry of Education. Singapore are joint examining
          authorities for the Primary School Leaving Examination (PSLE).
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" valign="top" style={EXPLANATORY_CONTENT}>
          1
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          This is a <b>Statement of Results</b> and not a certificate.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-11" valign="top" style={EXPLANATORY_SUB_TITLE}>
          Primary School Leaving Examination (PSLE)
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          2
        </div>
        <div className="col-sm-10" style={EXPLANATORY_FONT_SIZE_13}>
          <u>1960 - 1979</u>
          <br />
          Candidates will be awarded one of the following grades: PASS or FAIL
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          3
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1980</u>
          <br />
          Candidates will be awarded one og the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A,
          B or C (A is the highest and C the lowest).
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          4
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1981 - 1992</u>
          <br />
          Candidates will be awarded one og the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A.*,
          A, B or C (A.* is the highest and C the lowest).
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          5
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1990 onwards</u>
          <br />
          For the additional subjects Higher Chinese and Social Studies,
          candidates will be awarded one of the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Distinction, Merit or Pass </b>
          <br />
          Subjects that are not graded will be reflected as "Ungraded".
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          6
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1993 onwards</u>
          <br />
          For the additional subjects English Language, Mathematics, Science and
          Mother Tongue, candidates will be awarded one of the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>A.*, A, B, C, D or E</b> (A.* is the highest and E the lowest).
          <br />
          For the additional subjects Higher Mother Tongue and Social Studies,
          candidates will be awarded one of the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Distinction, Merit or Pass</b>
          <br />
          Subjects that are not graded will be reflected as "Ungraded".
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          7
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1996 onwards</u>
          <br />
          For the subjects Foundation English, Foundation Mathematics and Basic
          Mother Tongue, candidates will be awarded one of the following grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>1, 2, 3 or 4</b> (1 is the highest and 4 the lowest).
          <br />
          Subjects that are not graded will be reflected as "Ungraded".
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-11" valign="top" style={EXPLANATORY_SUB_TITLE}>
          Primary School Proficiency Examination (PSPE)
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          8
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          <u>1984 - 1993</u>
          <br />
          For the PSPE examination, candidates are awarded one of the following
          grades:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Good, Satisfactory or Low</b>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-11" valign="top" style={EXPLANATORY_SUB_TITLE}>
          Annotation
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          9
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          As of 2002, subjects taken under access arrangements are annotated
          with the following symbols:
          <br />
          <br />
          <u>
            <b># Exemption Symbol</b>
          </u>
          <br />
          The candidate was exempted from satifsying the full range of
          assessment objectives in this subject. Details may be obtained from
          the Singapore Examinations and Assessment Board.
          <br />
          <br />
          <u>
            <b>+ Access Arrangement Symbol</b>
          </u>
          <br />
          The candidate sat the paper under assessment arrangements. Details may
          be obtained from the Singapore Examinations and Assessment Board.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-11" valign="top" style={EXPLANATORY_SUB_TITLE}>
          Identification Number / Clarifications
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          10
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          The identification number refers to the number on their offical
          identification document, such as a birth certificate.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          11
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          This document is issued on condition of your strict compliance with
          the Examination Instructions and Regulations. You must comply with any
          direction by the Singapore Examinations and Assessment Board (SEAB) to
          return this document to SEAB.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-xs-1" style={EXPLANATORY_FONT_SIZE_13}>
          12
        </div>
        <div className="col-sm-10" valign="top" style={EXPLANATORY_CONTENT}>
          For further information or clarification on the PSLE, please visit the
          website of the Singapore Examinations and Assessment Board
          (http://www.seab.gov.sg).
        </div>
      </div>
    </div>
  </div>
);

const Template = certificate => (
  <div className="container-fluid">
    <div className="row justify-content-md-center">
      <div className="col-md-2" />
      <div className="col-md-8" style={EXPLANATORY_PAGE_SIZE}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12" style={EXPLANATORY_TITLE}>
              EXPLANATORY NOTES
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-11">
              {renderExplonataryNotes(certificate)}
            </div>
          </div>
        </div>
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="col-md-2" />
    </div>
  </div>
);

export default Template;