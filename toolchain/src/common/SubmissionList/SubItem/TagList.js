import React from 'react';
import CONSTANTS from './../../constants';

const TagList = ({ tags }) => (
  <div className="tags">
    {
      tags.slice(0, CONSTANTS.SUB_LIST.MAX_TAGS).map(t => (
        <span className="badge badge-info">{t}</span>
      ))
    }
    {
      (tags.length > CONSTANTS.SUB_LIST.MAX_TAGS + 1 && <a href="#">
        <span className="moreBadge badge badge-info">
          <i class="fas fa-ellipsis-h"></i>
        </span>
      </a>)
    }
  </div>
)

export default TagList;